import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons/brand-icons";
import type { SocialKey } from "@/config/site";

export const socialIcons: Record<
  SocialKey,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  email: Mail,
  whatsapp: WhatsappIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
};
