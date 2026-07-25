import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';

export default function ThreeDBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Mouse coordinate motion values initialized as numbers
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize position around center [-0.5, 0.5]
      mouseX.set((e.clientX / window.innerWidth) - 0.5);
      mouseY.set((e.clientY / window.innerHeight) - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth springs for responsive, elegant floating delay
  const springConfig = { stiffness: 45, damping: 18, mass: 1 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Parallax shifts for mouse interaction across layers (Standard input/output mapping)
  const layer1X = useTransform(mouseXSpring, [-0.5, 0.5], [25, -25]);
  const layer1Y = useTransform(mouseYSpring, [-0.5, 0.5], [25, -25]);
  const layer2X = useTransform(mouseXSpring, [-0.5, 0.5], [-17, 17]);
  const layer2Y = useTransform(mouseYSpring, [-0.5, 0.5], [-17, 17]);
  const layer3X = useTransform(mouseXSpring, [-0.5, 0.5], [10, -10]);
  const layer3Y = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);

  // Parallax offsets based on scroll depth
  const scrollY1 = useTransform(scrollY, [0, 4000], [0, -500]);
  const scrollY2 = useTransform(scrollY, [0, 4000], [0, -250]);
  const scrollY3 = useTransform(scrollY, [0, 4000], [0, -750]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 3D Depth Layer 1: Floating Gold wireframe ring at top left */}
      <motion.div
        style={{ x: layer1X, y: scrollY1 }}
        className="absolute top-[18vh] left-[8%] w-36 h-36 rounded-full border border-gold/10 flex items-center justify-center opacity-45"
      >
        <div className="w-28 h-28 rounded-full border border-dashed border-gold/15 animate-spin" style={{ animationDuration: '35s' }} />
        <div className="absolute w-2 h-2 bg-gold/30 rounded-full top-2 left-1/2" />
      </motion.div>

      {/* 3D Depth Layer 2: Floating large white orbital ring */}
      <motion.div
        style={{ x: layer2X, y: scrollY2 }}
        className="absolute top-[55vh] right-[10%] w-52 h-52 rounded-full border border-white/5 flex items-center justify-center opacity-30"
      >
        <div className="w-40 h-40 rounded-full border border-dotted border-white/10 animate-spin" style={{ animationDuration: '28s' }} />
        <div className="absolute w-1.5 h-1.5 bg-white/20 rounded-full bottom-4 right-1/4" />
      </motion.div>

      {/* 3D Depth Layer 3: Rotating glass prism box */}
      <motion.div
        style={{ x: layer3X, y: scrollY3 }}
        className="absolute top-[85vh] left-[20%] w-16 h-16 bg-linear-to-br from-gold/15 to-accent-red/5 rounded-2xl border border-white/10 backdrop-blur-[2px] opacity-25"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          z: [-20, 20]
        }}
        transition={{
          repeat: Infinity,
          duration: 32,
          ease: 'linear',
        }}
      />

      {/* 3D Depth Layer 4: Deep Red neon glow ring */}
      <motion.div
        style={{ x: layer1Y, y: scrollY1 }}
        className="absolute top-[135vh] right-[22%] w-28 h-28 bg-linear-to-tr from-accent-red/10 to-gold/5 rounded-3xl border border-white/5 backdrop-blur-[1.5px] opacity-20"
        animate={{
          rotateX: [0, -360],
          rotateY: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: 'linear',
        }}
      />

      {/* 3D Depth Layer 5: Large outer ambient system */}
      <motion.div
        style={{ x: layer2Y, y: scrollY2 }}
        className="absolute top-[210vh] left-[6%] w-44 h-44 rounded-full border border-gold/5 flex items-center justify-center opacity-15"
      >
        <div className="w-36 h-36 rounded-full border border-dashed border-gold/10 animate-spin" style={{ animationDuration: '65s' }} />
        <div className="absolute w-2.5 h-2.5 bg-gold/10 rounded-full top-8 left-1/4" />
      </motion.div>

      {/* 3D Depth Layer 6: Floating translucent box at footer transition */}
      <motion.div
        style={{ x: layer3Y, y: scrollY3 }}
        className="absolute top-[275vh] right-[14%] w-20 h-20 bg-linear-to-br from-white/5 to-white/0 rounded-xl border border-white/5 backdrop-blur-[1px] opacity-10"
        animate={{
          rotateX: [360, 0],
          rotateY: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 26,
          ease: 'linear',
        }}
      />
    </div>
  );
}
