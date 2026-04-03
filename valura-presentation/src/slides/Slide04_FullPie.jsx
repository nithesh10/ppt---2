import { motion } from 'framer-motion';
import { useEffect } from 'react';
import MiniPieChart from '../components/MiniPieChart';
import CountUp from '../components/CountUp';

export default function Slide04_FullPie({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  const stats = [
    { value: 90, suffix: '+', label: 'Markets' },
    { value: 100, suffix: 'K+', label: 'Instruments' },
    { value: 8, suffix: '+', label: 'Asset Classes' },
  ];

  const legend = [
    { name: 'Global Equities', color: '#2ba84a' },
    { name: 'Global ETFs', color: '#3ec95e' },
    { name: 'Bonds & Fixed Income', color: '#c9a84c' },
    { name: 'Mutual Funds', color: '#8b5cf6' },
    { name: 'Pre-IPO', color: '#ec4899' },
    { name: 'Structured Products', color: '#06b6d4' },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="flex flex-col items-center max-w-5xl w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          The Complete <span className="text-primary">Universe</span>
        </motion.h2>

        <motion.p
          className="text-text-secondary text-lg text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Here is the full pie. Every asset class Valura brings to your clients.
        </motion.p>

        {/* Animated donut chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 1, type: 'spring' }}
        >
          <MiniPieChart size={200} />
        </motion.div>

        {/* Phase 1: Stats counters */}
        {phase >= 1 && (
          <motion.div
            className="flex gap-12 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  <CountUp target={stat.value} suffix={stat.suffix} delay={i * 0.2} />
                </div>
                <div className="text-text-muted text-sm mt-1 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Phase 2: Legend */}
        {phase >= 2 && (
          <motion.div
            className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {legend.map((item, i) => (
              <motion.div
                key={item.name}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-text-secondary">{item.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
