import { activeSocialLinks } from "@/config/site";
import { socialIcons } from "@/components/ui/social-icon";
import { cn } from "@/lib/utils";

/** Linha compacta de ícones — usada no hero e no rodapé. */
export function SocialRow({ className }: { className?: string }) {
  if (activeSocialLinks.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {activeSocialLinks.map((link) => {
        const Icon = socialIcons[link.key];
        const isExternal = link.href.startsWith("http");

        return (
          <li key={link.key}>
            <a
              href={link.href}
              aria-label={link.label}
              title={link.label}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex size-11 items-center justify-center rounded-full border border-line sm:size-10 text-muted transition-colors duration-200 hover:border-line-strong hover:bg-surface hover:text-fg"
            >
              <Icon className="size-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
