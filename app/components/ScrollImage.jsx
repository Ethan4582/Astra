
'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ScrollImage({ src, alt, className, style, containerClassName }) {
   const containerRef = useRef(null);

   // Track scroll progress of the container relative to the viewport
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
   });

   // Map scroll progress (0 to 1) to scale (1.15 to 1.0) for more visible zoom
   // "Scroll downward zoom out" -> Progress 0 (entering from bottom) -> 1.15, Progress 1 (leaving to top) -> 1.0
   const scaleTarget = useTransform(scrollYProgress, [0, 1], [1.15, 1]); // Increased from 1.05 to 1.15 for more visible effect

   // Add smoothing to simulate the "transition time" feel
   const scale = useSpring(scaleTarget, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
   });

   return (
      <div
         ref={containerRef}
         className={`${containerClassName} overflow-hidden`}
         style={{ isolation: 'isolate' }}
      >
         <motion.div
            className={className}
            style={{
               ...style,
               scale: scale,
               backgroundImage: `url("${src}")`
            }}
            // Remove hover effects as requested ("Imp - not on hover")
            transition={{ duration: 0.6 }} // Reference for the user preference, though spring handles the dynamic movement
         />
      </div>
   );
}
