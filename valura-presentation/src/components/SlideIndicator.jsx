import { motion } from 'framer-motion';

export default function SlideIndicator({ current, total }) {
  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-3 z-50">
      <span className="text-text-muted text-sm font-mono">
        {current + 1} / {total}
      </span>
    </div>
  );
}
