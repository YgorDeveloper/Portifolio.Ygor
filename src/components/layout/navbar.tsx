"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { navItems, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type Indicator = { left: number; width: number };

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [indicator, setIndicator] = useState<Indicator | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const shouldReduceMotion = useReducedMotion();

  /* Fundo da navbar reage à rolagem. */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      /* No topo (hero) nenhum link fica marcado como ativo. */
      if (y < 240) setActive("");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Seção visível define o link ativo. */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && window.scrollY >= 240) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Pílula do link ativo: posicionada por medição, animada só com CSS. */
  useEffect(() => {
    const measure = () => {
      const list = listRef.current;
      if (!list || !active) {
        setIndicator(null);
        return;
      }

      const target = list.querySelector<HTMLElement>(`[data-nav="${active}"]`);
      setIndicator(
        target ? { left: target.offsetLeft, width: target.offsetWidth } : null,
      );
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  /* Menu mobile: trava a rolagem e fecha com Escape. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="group font-mono text-base font-semibold tracking-tight text-fg sm:text-lg"
          aria-label={`${siteConfig.brand} — início`}
        >
          YGOR
          <span className="text-subtle transition-colors duration-200 group-hover:text-accent">
            .DEV
          </span>
        </a>

        {/* Navegação — desktop */}
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul ref={listRef} className="relative flex items-center gap-1">
            <span
              aria-hidden
              className="absolute inset-y-0 rounded-full border border-line-strong bg-surface transition-[left,width,opacity] duration-300 ease-out"
              style={{
                left: indicator?.left ?? 0,
                width: indicator?.width ?? 0,
                opacity: indicator ? 1 : 0,
              }}
            />

            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    data-nav={item.id}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative block rounded-full px-4 py-2 text-sm transition-colors duration-200",
                      isActive ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Gatilho — mobile */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex size-11 items-center justify-center rounded-full border border-line text-fg transition-colors duration-200 hover:bg-surface md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Navegação — mobile */}
      <AnimatePresence initial={false}>
        {open ? (
          <m.nav
            id="menu-mobile"
            aria-label="Navegação principal"
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-page flex flex-col py-2">
              {navItems.map((item, index) => (
                <m.li
                  key={item.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.24 }}
                >
                  <a
                    href={item.href}
                    onClick={close}
                    aria-current={active === item.id ? "location" : undefined}
                    className={cn(
                      "flex items-center justify-between border-b border-line/70 py-4 text-base transition-colors duration-200",
                      active === item.id ? "text-fg" : "text-muted",
                    )}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                </m.li>
              ))}
            </ul>
          </m.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
