"use client";

import { motion } from "framer-motion";

export default function ImageReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      whileHover={{
        y: -6,
        scale: 1.025,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}
