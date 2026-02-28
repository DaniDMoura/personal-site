import { type FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Button } from "./Button";
import { SocialLink } from "./SocialLink";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { staggerContainer, staggerItem, heroImageTransition } from "../lib/animations";

const HERO_IMAGES = ["/picture1.jpg", "/picture2.jpg", "/picture3.jpg"];
const ROTATION_INTERVAL_MS = 7000;

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/danilosmoura_",
    label: "Instagram",
    icon: <InstagramLogoIcon width={18} height={18} className="text-current icon-appearance" />,
  },
  {
    href: "https://www.linkedin.com/in/danilosantos-moura/",
    label: "LinkedIn",
    icon: <LinkedInLogoIcon width={18} height={18} className="text-current icon-appearance" />,
  },
  {
    href: "https://github.com/DaniDMoura",
    label: "GitHub",
    icon: <GitHubLogoIcon width={18} height={18} className="text-current icon-appearance" />,
  },
  {
    href: "mailto:mouradanilo061@gmail.com",
    label: "Email",
    icon: <EnvelopeClosedIcon width={18} height={18} className="text-current icon-appearance" />,
  },
] as const;

export const Hero: FC = () => {
  const [imageIndex, setImageIndex] = useState(
    () => Math.floor(Math.random() * HERO_IMAGES.length)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setImageIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const currentSrc = HERO_IMAGES[imageIndex];

  return (
    <Section variant="dark" className="relative flex-1 min-h-0 flex flex-col">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: "var(--gradient-aurora-overlay)" }}
        aria-hidden
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-center flex-1 min-h-0 px-[var(--section-padding-x)] py-6 max-w-2xl mx-auto w-full"
      >
        {/* Foto com rodízio a cada 5s */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <motion.div variants={staggerItem} className="shrink-0 relative w-28 h-28 sm:w-[8.25rem] sm:h-[8.25rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={currentSrc}
                src={currentSrc}
                alt="Danilo Moura"
                className="absolute inset-0 w-full h-full object-cover rounded-none ring-[1px] ring-white/15"
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={heroImageTransition}
              />
            </AnimatePresence>
          </motion.div>
        <div>
          <motion.h1
            variants={staggerItem}
            className="font-serif text-[2.125rem] sm:text-[2.375rem] md:text-[3rem] font-normal tracking-normal gradient-text hero-title"
          >
            Danilo Moura
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-0.5 text-[var(--color-text-secondary)] text-sm sm:text-base font-normal tracking-tight"
          >
            Software Developer
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={staggerContainer}
        className="mt-5 flex flex-col gap-2"
      >
        {SOCIAL_LINKS.map(({ href, label, icon }) => (
          <motion.div key={label} variants={staggerItem} className="w-full">
            <SocialLink href={href} label={label} icon={icon} className="w-full" />
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={staggerItem} className="mt-5">
        <Button
          as="a"
          href="mailto:mouradanilo061@gmail.com"
          variant="primary"
          className="h-10 px-5 text-xs"
        >
          Entrar em contato
        </Button>
      </motion.div>
    </motion.div>
  </Section>
  );
};
