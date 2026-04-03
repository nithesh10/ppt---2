import { motion } from 'framer-motion';
import { useEffect } from 'react';
import MiniPieChart from '../components/MiniPieChart';

const companies = [
  { name: 'SpaceX', desc: 'Aerospace & Space Exploration' },
  { name: 'OpenAI', desc: 'Artificial Intelligence' },
  { name: 'Stripe', desc: 'Global FinTech Payments' },
];

export default function Slide09_PreIPO({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center px-16">
      <div className="max-w-5xl w-full">
        <div className="flex items-start justify-between gap-10">
          <div className="flex-1">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Pre-IPO & <span style={{ color: '#ec4899' }}>Private Opportunities</span>
            </motion.h2>

            <div className="space-y-3 mb-6">
              {companies.map((c, i) => (
                <motion.div
                  key={c.name}
                  className="bg-bg-card border border-border rounded-xl px-5 py-4 flex items-center justify-between"
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.12, type: 'spring' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: '#ec489920', color: '#ec4899' }}>
                      {c.name[0]}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-text-primary">{c.name}</div>
                      <div className="text-xs text-text-muted">{c.desc}</div>
                    </div>
                  </div>
                  <motion.div
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                    style={{ color: '#ec4899', borderColor: '#ec489940', backgroundColor: '#ec489910' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.15, 1] }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                  >
                    PRIVATE
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {phase >= 1 && (
              <div className="space-y-2">
                {['Curated opportunities before they hit public markets', 'For your premium, high-net-worth clients'].map((pt, i) => (
                  <motion.div key={i} className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#ec4899' }} />
                    <span className="text-text-secondary text-sm">{pt}</span>
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
                  &ldquo;Jab client pooche 'Can I invest in SpaceX?', toh ab aapko 'No' bolne ki zaroorat nahi. Aap unhe direct dikha sakte hain kaise karna hai.&rdquo;
                </p>
              </motion.div>
            )}
          </div>

          <motion.div className="flex-shrink-0" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <MiniPieChart highlightIndex={4} size={130} />
            <p className="text-center text-xs mt-2 font-medium" style={{ color: '#ec4899' }}>Pre-IPO</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
