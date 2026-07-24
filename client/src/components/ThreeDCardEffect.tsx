import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ThreeDCardEffectProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tiltMaxAngle?: number; // Maximum tilt angle in degrees
  key?: React.Key;
}

export default function ThreeDCardEffect({
  children,
  className = '',
  onClick,
  tiltMaxAngle = 12
}: ThreeDCardEffectProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for normalized mouse positions [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for a tactile, physical reaction feel
  const springConfig = { stiffness: 120, damping: 20, mass: 0.8 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Transform normalized mouse input into 3D degrees
  const rotateX = useTransform(springY, [-0.5, 0.5], [tiltMaxAngle, -tiltMaxAngle]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-tiltMaxAngle, tiltMaxAngle]);

  // Subtle 3D translations for elements inside
  const translateZ = useSpring(useTransform(springX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize coordinates to range [-0.5, 0.5]
    const normalizedX = (mouseX / width) - 0.5;
    const normalizedY = (mouseY / height) - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      className={`relative select-none will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
