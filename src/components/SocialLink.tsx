import { type FC } from "react";
import { Button } from "./Button";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

export const SocialLink: FC<SocialLinkProps> = ({ href, label, icon, className = "" }) => (
  <Button
    as="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variant="secondary"
    className={`w-56 min-h-10 py-2.5 text-sm ${className}`.trim()}
    icon={icon}
  >
    {label}
  </Button>
);
