import type { Variants } from "framer-motion";

/** Curva suave estilo side quest — transições cinematográficas */
const easeSmooth = [0.22, 0.61, 0.36, 1] as const;

/** Transição padrão (polida e contida) */
export const transition = {
  type: "tween" as const,
  ease: easeSmooth,
  duration: 0.5,
};

/** Stagger de entrada — ritmo calmo, revelação suave */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...transition, duration: 0.5 },
  },
};

/** Entrada suave de um único elemento */
export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition,
} as const;

/** Hover/tap discreto — feedback suave tipo UI premium */
export const buttonHoverTap = {
  whileHover: { scale: 1.015 },
  whileTap: { scale: 0.985 },
  transition: { type: "tween" as const, ease: easeSmooth, duration: 0.22 },
} as const;

/** Transição da foto do hero — crossfade com scale sutil */
export const heroImageTransition = {
  duration: 0.55,
  ease: easeSmooth,
} as const;
