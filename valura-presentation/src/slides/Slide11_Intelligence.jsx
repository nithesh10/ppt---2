import { motion } from 'framer-motion';
import { useEffect } from 'react';

const features = [
  { icon: '📊', text: 'Curated insights & market intelligence' },
  { icon: '📋', text: 'Opportunity reports delivered to you' },
  { icon: '🎯', text: 'Customized & personalized for each client' },
  { icon: '⚡', text: 'One-click solution — no expertise needed' },
];

export default function Slide11_Intelligence({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center px-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-start gap-12">
          <div className="flex-1">
            <motion.p
              className="text-sm text-primary uppercase tracking-wider mb-2 font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Beyond Broking
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Not just a broking platform.
            </motion.h2>
            <motion.p
              className="text-xl text-primary font-semibold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A dedicated Research & Advisory Desk
            </motion.p>

            {phase >= 1 && (
              <div className="space-y-3">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 bg-bg-card border border-border rounded-lg px-5 py-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}
                  >
                    <span className="text-xl">{f.icon}</span>
                    <span className="text-text-secondary">{f.text}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {phase >= 2 && (
              <motion.div
                className="mt-6 border-l-2 border-[#c9a84c]/50 bg-[#c9a84c]/5 rounded-r-xl px-6 py-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <p className="text-[#c9a84c]/90 italic text-base leading-relaxed">
                  &ldquo;Aap jab client meeting mein jaate hain, toh institutional-quality research ke saath jaate hain. Aap unke global wealth advisor ban jaate hain.&rdquo;
                </p>
              </motion.div>
            )}
          </div>

          {/* Research report mockup */}
          <motion.div
            className="flex-shrink-0 w-72"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-bg-card border border-border rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <img src="/Valura_Logo_Green.png" alt="V" className="w-7 h-7 rounded-lg" />
                <span className="text-xs text-text-muted">Valura Research</span>
              </div>
              <div className="text-sm font-bold text-text-primary mb-1">Global Market Intelligence</div>
              <div className="text-xs text-text-muted mb-4">Weekly Report &bull; Q1 2025</div>

              {/* Mock line chart */}
              <svg width="100%" height="60" viewBox="0 0 200 60" className="mb-3">
                <motion.path
                  d="M 0 50 Q 30 45 50 35 T 100 20 T 150 25 T 200 8"
                  fill="none" stroke="#2ba84a" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                />
                <motion.path
                  d="M 0 50 Q 30 45 50 35 T 100 20 T 150 25 T 200 8 V 60 H 0 Z"
                  fill="url(#researchGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 1.8 }}
                />
                <defs>
                  <linearGradient id="researchGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2ba84a" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>

              {['Top Opportunities', 'Risk Analysis', 'Sector Outlook'].map((label, i) => (
                <motion.div
                  key={label}
                  className="flex items-center justify-between py-2 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.15 }}
                >
                  <span className="text-xs text-text-secondary">{label}</span>
                  <div className="w-16 h-2 rounded-full bg-bg-card-light overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: ['#2ba84a', '#c9a84c', '#3ec95e'][i] }}
                      initial={{ width: 0 }}
                      animate={{ width: `${[85, 70, 90][i]}%` }}
                      transition={{ delay: 1.2 + i * 0.15, duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
