import { type FC } from "react";
import { motion } from "framer-motion";
import { buttonHoverTap } from "../lib/animations";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
}

interface ButtonAsLink extends BaseProps {
  as: "a";
  href: string;
}

interface ButtonAsButton extends BaseProps {
  as?: "button";
  href?: never;
}

type ButtonProps = (ButtonAsLink | ButtonAsButton) & {
  as?: "a" | "button";
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-white text-[var(--color-text-on-light)] hover:bg-zinc-100 border border-transparent",
  secondary:
    "bg-transparent text-white border border-white/25 hover:border-white/40 hover:bg-white/5",
  ghost: "bg-transparent text-white/80 border border-transparent hover:text-white hover:bg-white/5",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-button)] font-normal tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60 px-5 py-3 min-h-[2.75rem] sm:px-6 sm:py-3";

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  as: Component = "button",
  href,
  target,
  rel,
  children,
  className = "",
  icon,
}) => {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  const motionProps = {
    className: classes,
    ...buttonHoverTap,
  };

  if (Component === "a" && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...motionProps}>
      {content}
    </motion.button>
  );
};
