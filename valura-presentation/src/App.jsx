import { AnimatePresence } from 'framer-motion';
import useSlideNavigation from './utils/useSlideNavigation';
import ProgressBar from './components/ProgressBar';
import SlideIndicator from './components/SlideIndicator';
import SlideContainer from './components/SlideContainer';
import SectionBadge from './components/SectionBadge';
import SlideOverview from './components/SlideOverview';
import ParticleBackground from './components/ParticleBackground';

import Slide01_LockedDoor from './slides/Slide01_LockedDoor';
import Slide02_Keyhole from './slides/Slide02_Keyhole';
import Slide03_DoorOpens from './slides/Slide03_DoorOpens';
import Slide04_FullPie from './slides/Slide04_FullPie';
import Slide05_Equities from './slides/Slide05_Equities';
import Slide06_ETFs from './slides/Slide06_ETFs';
import Slide07_Bonds from './slides/Slide07_Bonds';
import Slide08_MutualFunds from './slides/Slide08_MutualFunds';
import Slide09_PreIPO from './slides/Slide09_PreIPO';
import Slide10_Structured from './slides/Slide10_Structured';
import Slide11_Intelligence from './slides/Slide11_Intelligence';
import Slide12_BeforeAfter from './slides/Slide12_BeforeAfter';
import Slide13_Portfolio from './slides/Slide13_Portfolio';
import Slide14_Returns from './slides/Slide14_Returns';
import Slide15_PowerClose from './slides/Slide15_PowerClose';

const slides = [
  Slide01_LockedDoor,
  Slide02_Keyhole,
  Slide03_DoorOpens,
  Slide04_FullPie,
  Slide05_Equities,
  Slide06_ETFs,
  Slide07_Bonds,
  Slide08_MutualFunds,
  Slide09_PreIPO,
  Slide10_Structured,
  Slide11_Intelligence,
  Slide12_BeforeAfter,
  Slide13_Portfolio,
  Slide14_Returns,
  Slide15_PowerClose,
];

// Map slide index to section/act number
const sectionMap = {
  0: 1, 1: 1, 2: 1,
  3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2,
  10: 3,
  11: 4, 12: 4, 13: 4,
  14: 5,
};

function App() {
  const nav = useSlideNavigation(slides.length);
  const CurrentSlide = slides[nav.current];

  const handleClick = (e) => {
    // Don't advance on right-side clicks (for overview)
    if (e.clientX > window.innerWidth - 100 && e.clientY > window.innerHeight - 100) return;
    nav.advance();
  };

  return (
    <div
      className="w-screen h-screen bg-bg overflow-hidden relative cursor-pointer select-none"
      onClick={handleClick}
    >
      <ParticleBackground />
      <ProgressBar current={nav.current} total={nav.totalSlides} />

      {/* Logo top-right */}
      <div className="fixed top-4 right-6 z-40 flex items-center gap-3">
        <img src="/Valura_Logo_Green.png" alt="Valura" className="h-10 w-10 rounded-xl shadow-lg shadow-black/30" />
      </div>

      {/* Section badge */}
      <SectionBadge section={sectionMap[nav.current]} />

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <SlideContainer slideKey={nav.current}>
          <CurrentSlide
            phase={nav.phase}
            registerPhases={nav.registerPhases}
            slideIndex={nav.current}
          />
        </SlideContainer>
      </AnimatePresence>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 w-full h-12 bg-bg-dark/80 backdrop-blur-sm border-t border-border z-40 flex items-center justify-between px-8">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-[0.3em] text-text-muted uppercase">VALURA</span>
          <span className="text-text-muted/30 mx-2">|</span>
          <span className="text-xs text-text-muted">Why Valura?</span>
        </div>
        <SlideIndicator current={nav.current} total={nav.totalSlides} />
      </div>

      {/* Hint text */}
      {!nav.hasInteracted && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-40">
          <p className="text-text-muted text-sm animate-pulse">
            Click or press → to advance
          </p>
        </div>
      )}

      {/* Slide overview */}
      <AnimatePresence>
        {nav.showOverview && (
          <SlideOverview
            current={nav.current}
            total={nav.totalSlides}
            onSelect={(i) => { nav.goTo(i); nav.setShowOverview(false); }}
            onClose={() => nav.setShowOverview(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
