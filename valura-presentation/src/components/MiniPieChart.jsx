import { motion } from 'framer-motion';

const slices = [
  { name: 'Equities', color: '#2ba84a', percent: 20 },
  { name: 'ETFs', color: '#3ec95e', percent: 18 },
  { name: 'Bonds', color: '#c9a84c', percent: 17 },
  { name: 'Mutual Funds', color: '#8b5cf6', percent: 17 },
  { name: 'Pre-IPO', color: '#ec4899', percent: 14 },
  { name: 'Structured', color: '#06b6d4', percent: 14 },
];

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(cx, cy, r, startAngle, endAngle) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return [
    'M', cx, cy,
    'L', start.x, start.y,
    'A', r, r, 0, largeArc, 0, end.x, end.y,
    'Z',
  ].join(' ');
}

// Pre-compute slice data to avoid mutation during render
function computeSlices() {
  const result = [];
  let angle = 0;
  for (const slice of slices) {
    const sweep = (slice.percent / 100) * 360;
    result.push({ ...slice, startAngle: angle, endAngle: angle + sweep });
    angle += sweep;
  }
  return result;
}

const computedSlices = computeSlices();

export default function MiniPieChart({ highlightIndex = -1, size = 100, animated = true }) {
  const cx = 50, cy = 50, r = 44;

  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {computedSlices.map((slice, i) => {
        const d = describeArc(cx, cy, r, slice.startAngle, slice.endAngle);
        const isHighlighted = highlightIndex === i;
        const targetOpacity = highlightIndex >= 0 ? (isHighlighted ? 1 : 0.15) : 0.85;

        return (
          <motion.path
            key={slice.name}
            d={d}
            fill={slice.color}
            stroke="#060d08"
            strokeWidth="1"
            initial={animated ? { opacity: 0, scale: 0.8 } : { opacity: targetOpacity }}
            animate={{ opacity: targetOpacity, scale: 1 }}
            transition={{
              delay: animated ? i * 0.12 : 0,
              duration: 0.5,
              ease: 'easeOut',
            }}
            style={{ transformOrigin: '50% 50%' }}
          />
        );
      })}
      {/* Center circle for donut effect */}
      <circle cx={cx} cy={cy} r={18} fill="#060d08" />
    </svg>
  );
}

export { slices, computedSlices };
