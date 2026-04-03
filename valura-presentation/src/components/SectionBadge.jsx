import { motion } from 'framer-motion';

const sections = {
  1: { label: 'ACT 1', title: 'The Opening Punch', color: '#2ba84a' },
  2: { label: 'ACT 2', title: 'Product Showcase', color: '#c9a84c' },
  3: { label: 'ACT 3', title: 'Global Intelligence', color: '#3ec95e' },
  4: { label: 'ACT 4', title: 'Before vs After', color: '#f59e0b' },
  5: { label: 'ACT 5', title: 'The Power Close', color: '#8b5cf6' },
};

export default function SectionBadge({ section }) {
  const s = sections[section];
  if (!s) return null;

  return (
    <motion.div
      className="fixed top-6 left-8 flex items-center gap-3 z-40"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
        style={{ backgroundColor: s.color }}
      >
        {section}
      </div>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted">
          {s.label}
        </div>
        <div className="text-sm font-medium text-text-secondary">{s.title}</div>
      </div>
    </motion.div>
  );
}
