"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

export default function Revealer() {
   useEffect(() => {
      gsap.registerPlugin(CustomEase);
      CustomEase.create("hop", "0.9, 0, 0.1, 1");

      gsap.to(".revealer", {
         scaleY: 0,
         duration: 0.8,
         delay: 0.4,
         ease: "hop",
      });
   }, []);

   return (
      <div
         className="revealer fixed inset-0 bg-black z-[9999] pointer-events-none"
         style={{ transformOrigin: "top" }}
      />
   );
}
