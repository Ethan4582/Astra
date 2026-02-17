
'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
   const lenisRef = useRef(null);

   useEffect(() => {
      if (!lenisRef.current) {
         lenisRef.current = new Lenis({
            lerp: 0.1,
            smooth: true,
         });
         function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
         }
         requestAnimationFrame(raf);
      }
      return () => {
         if (lenisRef.current) {
            lenisRef.current.destroy();
            lenisRef.current = null;
         }
      };
   }, []);

   return null;
}
