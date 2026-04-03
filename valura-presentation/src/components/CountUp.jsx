import { useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CountUp({ target, suffix = '', prefix = '', delay = 0, duration = 1.5 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, { duration, delay, ease: 'easeOut' });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [target, delay, duration]);

  return <>{prefix}{display.toLocaleString()}{suffix}</>;
}
