import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CountUp from '../components/CountUp';

// US Equities Only — volatile, jagged equity curve
// Starts at 100, big swings, ends around 155
const beforePoints = [
  100, 108, 102, 118, 130, 122, 140, 126, 115, 132,
  145, 128, 138, 120, 135, 148, 130, 142, 125, 150,
  140, 132, 155, 138, 148, 135, 152, 142, 148, 155,
];

// Valura Diversified — smooth, steady upward curve (better Sharpe)
// Starts at 100, consistent growth, less drawdown, ends around 175
const afterPoints = [
  100, 104, 107, 110, 113, 115, 118, 120, 122, 126,
  129, 131, 133, 130, 134, 138, 141, 144, 147, 150,
  152, 155, 153, 157, 160, 163, 166, 169, 172, 175,
];

function EquityCurve({ points, strokeColor, fillId, delay = 0, label }) {
  const w = 320, h = 120, padX = 0, padY = 10;
  const minV = Math.min(...points) - 5;
  const maxV = Math.max(...points) + 5;

  const toX = (i) => padX + (i / (points.length - 1)) * (w - padX * 2);
  const toY = (v) => padY + (1 - (v - minV) / (maxV - minV)) * (h - padY * 2);

  // Build line path
  const linePath = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i).toFixed(1)} ${toY(v).toFixed(1)}`).join(' ');
  // Build fill path (closes to bottom)
  const fillPath = linePath + ` L ${toX(points.length - 1).toFixed(1)} ${h} L ${toX(0).toFixed(1)} ${h} Z`;

  // Year labels
  const years = ['2020', '2021', '2022', '2023', '2024'];

  return (
    <svg width="100%" height={h + 24} viewBox={`0 0 ${w} ${h + 24}`} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
          <stop offset="100%" stopColor={strokeColor} stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Horizontal grid lines */}
      {[0.25, 0.5, 0.75].map((frac) => (
        <line
          key={frac}
          x1={0} y1={padY + frac * (h - padY * 2)}
          x2={w} y2={padY + frac * (h - padY * 2)}
          stroke="#1a3322" strokeWidth="0.5" strokeDasharray="4 4"
        />
      ))}

      {/* Fill area */}
      <motion.path
        d={fillPath}
        fill={`url(#${fillId})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.8, duration: 0.6 }}
      />

      {/* Equity curve line */}
      <motion.path
        d={linePath}
        fill="none"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: 1.8, ease: 'easeOut' }}
      />

      {/* End dot */}
      <motion.circle
        cx={toX(points.length - 1)}
        cy={toY(points[points.length - 1])}
        r="4"
        fill={strokeColor}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 1.8, duration: 0.3 }}
      />

      {/* End value label */}
      <motion.text
        x={toX(points.length - 1) - 8}
        y={toY(points[points.length - 1]) - 10}
        fill={strokeColor}
        fontSize="10"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 2 }}
      >
        {points[points.length - 1]}
      </motion.text>

      {/* Year labels along bottom */}
      {years.map((yr, i) => {
        const xPos = toX(Math.round((i / (years.length - 1)) * (points.length - 1)));
        return (
          <text key={yr} x={xPos} y={h + 16} fill="#5a7d66" fontSize="9" textAnchor="middle">
            {yr}
          </text>
        );
      })}
    </svg>
  );
}

export default function Slide14_Returns({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center px-16">
      <div className="max-w-5xl w-full">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Not just better returns — better <span className="text-primary">RISK-ADJUSTED</span> returns
        </motion.h2>

        <div className="grid grid-cols-2 gap-8">
          {/* US Equities Only — volatile curve */}
          <motion.div
            className="bg-bg-card border border-border rounded-xl p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">US Equities Only</div>
            <EquityCurve
              points={beforePoints}
              strokeColor="#5a7d66"
              fillId="beforeFill"
              delay={0.5}
            />
            <div className="flex items-center justify-between border-t border-border pt-4 mt-3">
              <div>
                <div className="text-[10px] text-text-muted uppercase">Return</div>
                <div className="text-lg font-bold text-text-secondary">~10%</div>
              </div>
              <div>
                <div className="text-[10px] text-text-muted uppercase">Volatility</div>
                <div className="text-lg font-bold text-danger">High</div>
              </div>
              <div>
                <div className="text-[10px] text-text-muted uppercase">Sharpe</div>
                <div className="text-lg font-bold text-text-secondary">0.65</div>
              </div>
            </div>
          </motion.div>

          {/* Valura Diversified — smooth curve */}
          {phase >= 1 ? (
            <motion.div
              className="bg-bg-card border border-primary/30 rounded-xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Valura Diversified</div>
              <EquityCurve
                points={afterPoints}
                strokeColor="#2ba84a"
                fillId="afterFill"
                delay={0.2}
              />
              <div className="flex items-center justify-between border-t border-primary/20 pt-4 mt-3">
                <div>
                  <div className="text-[10px] text-text-muted uppercase">Return</div>
                  <div className="text-lg font-bold text-primary">~12%</div>
                </div>
                <div>
                  <div className="text-[10px] text-text-muted uppercase">Volatility</div>
                  <div className="text-lg font-bold text-primary-light">Low</div>
                </div>
                <div>
                  <div className="text-[10px] text-text-muted uppercase">Sharpe</div>
                  <div className="text-lg font-bold text-accent">1.15</div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex items-center justify-center">
              <motion.div className="text-text-muted text-lg"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}>
                Click to compare...
              </motion.div>
            </div>
          )}
        </div>

        {/* Phase 2: Sharpe highlight */}
        {phase >= 2 && (
          <motion.div className="mt-8 text-center" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-4 bg-primary/10 border border-primary/30 rounded-full px-8 py-4">
              <div className="text-center">
                <div className="text-xs text-text-muted">Sharpe Ratio Improvement</div>
                <div className="text-3xl font-bold text-primary">
                  +<CountUp target={77} suffix="%" delay={0.2} />
                </div>
              </div>
              <div className="w-px h-10 bg-primary/30" />
              <div className="text-sm text-text-secondary max-w-xs text-left">
                Better returns with <span className="text-primary font-semibold">lower risk</span> through true global diversification
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
