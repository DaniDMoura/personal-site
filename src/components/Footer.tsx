import { type FC } from "react";

export const Footer: FC = () => (
  <footer className="bg-[var(--color-surface-dark)] text-[var(--color-text-secondary)] pt-2 pb-5 px-[var(--section-padding-x)] text-center text-[10px] font-normal tracking-tight">
    <span>© {new Date().getFullYear()} Danilo Moura</span>
    <span className="mx-2 text-[var(--color-text-secondary)]/40">·</span>
    <a href="/privacy.html" className="hover:text-[var(--color-text-primary)] transition-colors">Privacidade</a>
  </footer>
);
