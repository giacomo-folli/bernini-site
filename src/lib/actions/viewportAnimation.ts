import type { Action } from 'svelte/action';
import { animate } from 'motion';

export interface ViewportAnimationParams {
  /** The animation type to apply */
  animation: 'fade' | 'slide-up' | 'slide-in' | 'scale' | 'stagger';
  
  /** Optional delay in milliseconds */
  delay?: number;
  
  /** Threshold of visibility (0-1) required to trigger the animation */
  threshold?: number;
}

export const viewportAnimate: Action<HTMLElement, ViewportAnimationParams> = (
  node,
  params = { animation: 'fade', threshold: 0.1 }
) => {
  // Set initial state
  node.style.opacity = '0';
  if (params.animation === 'slide-up') {
    node.style.transform = 'translateY(20px)';
  } else if (params.animation === 'scale') {
    node.style.transform = 'scale(0.95)';
  }

  // Simple observer setup
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add small delay to prevent all animations happening at once
          setTimeout(() => {
            if (params.animation === 'slide-up') {
              node.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
              node.style.opacity = '1';
              node.style.transform = 'translateY(0)';
            } else if (params.animation === 'scale') {
              node.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
              node.style.opacity = '1';
              node.style.transform = 'scale(1)';
            } else {
              // Default fade animation
              node.style.transition = `opacity 0.6s ease`;
              node.style.opacity = '1';
            }
          }, params.delay || 0);
          
          // Once animation is triggered, disconnect observer
          observer.disconnect();
        }
      });
    },
    { threshold: params.threshold || 0.1 }
  );

  // Start observing
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
};