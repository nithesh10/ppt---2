import { motion } from 'framer-motion';

export default function ProgressBar({ current, total }) {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-border z-50">
      <motion.div
        className="h-full"
        style={{ background: 'linear-gradient(90deg, #1d7a33, #2ba84a, #3ec95e)' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
}
