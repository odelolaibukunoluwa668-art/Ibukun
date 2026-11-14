import { useRef, useEffect, useState } from 'react';
import { useInView, motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  label,
  suffix = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      setDisplayValue(v);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-7xl font-black font-headline text-primary mb-2 flex items-center justify-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">
        {label}
      </p>
    </div>
  );
}
