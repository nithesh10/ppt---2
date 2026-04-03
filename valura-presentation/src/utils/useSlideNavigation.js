import { useState, useEffect, useCallback, useRef } from 'react';

export default function useSlideNavigation(totalSlides) {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const maxPhaseRef = useRef({});

  const registerPhases = useCallback((slideIndex, max) => {
    maxPhaseRef.current[slideIndex] = max;
  }, []);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    const clamped = Math.max(0, Math.min(totalSlides - 1, index));
    if (clamped !== current) {
      setIsTransitioning(true);
      setCurrent(clamped);
      setPhase(0);
      setHasInteracted(true);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  }, [current, totalSlides, isTransitioning]);

  const advance = useCallback(() => {
    if (showOverview || isTransitioning) return;
    setHasInteracted(true);
    const maxPhase = maxPhaseRef.current[current] || 0;
    if (phase < maxPhase) {
      setPhase((p) => p + 1);
    } else {
      goTo(current + 1);
    }
  }, [current, phase, goTo, showOverview, isTransitioning]);

  const prev = useCallback(() => {
    if (showOverview || isTransitioning) return;
    if (phase > 0) {
      setPhase((p) => p - 1);
    } else {
      goTo(current - 1);
    }
  }, [current, phase, goTo, showOverview, isTransitioning]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowOverview((v) => !v);
        return;
      }
      if (showOverview) {
        if (e.key >= '1' && e.key <= '9') {
          const idx = parseInt(e.key) - 1;
          if (idx < totalSlides) { goTo(idx); setShowOverview(false); }
        }
        return;
      }
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          advance();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prev();
          break;
        default:
          if (e.key >= '1' && e.key <= '9') {
            const idx = parseInt(e.key) - 1;
            if (idx < totalSlides) goTo(idx);
          }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [advance, prev, goTo, totalSlides, showOverview]);

  return {
    current, phase, advance, prev, goTo,
    showOverview, setShowOverview,
    hasInteracted, totalSlides,
    registerPhases,
  };
}
