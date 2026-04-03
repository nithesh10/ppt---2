import { motion } from 'framer-motion';

const slideNames = [
  'The Locked Door', 'The Keyhole', 'Valura Opens the Door',
  'The Full Pie', 'Global Equities', 'Global ETFs',
  'Global Bonds', 'Mutual Funds', 'Pre-IPO',
  'Structured Products', 'Global Intelligence',
  'Before vs After', '₹5L Portfolio', 'Returns Comparison',
  'One Platform'
];

export default function SlideOverview({ current, total, onSelect, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-md flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="grid grid-cols-5 gap-4 p-10 max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {Array.from({ length: total }, (_, i) => (
          <motion.button
            key={i}
            className={`p-4 rounded-xl border text-left transition-colors ${
              i === current
                ? 'border-primary bg-primary/10 text-text-primary'
                : 'border-border bg-bg-card text-text-secondary hover:border-primary/50'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            onClick={() => onSelect(i)}
          >
            <div className="text-xs text-text-muted mb-1">Slide {i + 1}</div>
            <div className="text-sm font-medium">{slideNames[i] || `Slide ${i + 1}`}</div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
