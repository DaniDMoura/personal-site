import { type FC } from "react";

export const Footer: FC = () => (
  <footer className="bg-[var(--color-surface-dark)] text-[var(--color-text-secondary)] pt-2 pb-5 px-[var(--section-padding-x)] text-center text-[10px] font-normal tracking-tight">
    © {new Date().getFullYear()} Danilo Moura
  </footer>
);
