import { type FC, type HTMLAttributes } from "react";

type SectionVariant = "dark" | "light";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  /** Conteúdo interno sem padding; use SectionInner para padding padrão */
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<SectionVariant, string> = {
  dark: "bg-[var(--color-surface-dark)] text-[var(--color-text-primary)]",
  light: "bg-[var(--color-surface-light)] text-[var(--color-text-on-light)]",
};

export const Section: FC<SectionProps> = ({
  variant = "dark",
  children,
  className = "",
  ...rest
}) => {
  return (
    <section
      className={`${variantStyles[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </section>
  );
};

interface SectionInnerProps {
  children: React.ReactNode;
  className?: string;
  /** Conteúdo centralizado com max-width */
  narrow?: boolean;
}

export const SectionInner: FC<SectionInnerProps> = ({
  children,
  className = "",
  narrow = false,
}) => {
  const layout = narrow
    ? "max-w-2xl mx-auto"
    : "max-w-5xl mx-auto";
  return (
    <div
      className={`py-[var(--section-padding-y)] px-[var(--section-padding-x)] ${layout} ${className}`.trim()}
    >
      {children}
    </div>
  );
};
