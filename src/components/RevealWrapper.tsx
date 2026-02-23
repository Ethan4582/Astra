"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.9, ease: "easeOut" } },
};

const fadeInUpScroll: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const RevealHero = ({ children }: { children: React.ReactNode }) => (
   <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {children}
   </motion.div>
);

export const RevealScroll = ({ className, children }: { className?: string; children: React.ReactNode }) => (
   <motion.div className={className} variants={fadeInUpScroll} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {children}
   </motion.div>
);
