import type { Action } from 'svelte/action';
import { animate, spring, stagger } from 'motion';

export interface ScrollAnimationParams {
  /** The animation type to apply */
  animation: 'fade' | 'slide-up' | 'slide-in' | 'scale' | 'stagger';
  
  /** Optional delay in milliseconds */
  delay?: number;
  
  /** Optional animation duration in milliseconds */
  duration?: number;
  
  /** Threshold of visibility (0-1) required to trigger the animation */
  threshold?: number;
  
  /** Optional stagger delay for child elements (ms) - only used with 'stagger' animation */
  staggerDelay?: number;
  
  /** CSS selector for children to animate when using 'stagger' */
  staggerSelector?: string;
  
  /** Whether to animate once or every time element enters viewport */
  once?: boolean;

  /** Custom transition options for overriding defaults */
  options?: Record<string, any>;
  
  /** Whether to immediately show the element if it's in view on page load */
  immediate?: boolean;
}

export const scrollAnimate: Action<HTMLElement, ScrollAnimationParams> = (
  node,
  params = { 
    animation: 'fade', 
    threshold: 0.1, 
    once: true,
    immediate: true
  }
) => {
  const { 
    animation, 
    delay = 0, 
    duration, 
    threshold = 0.1, 
    staggerDelay = 100, 
    staggerSelector, 
    once = true,
    options = {},
    immediate = true
  } = params;
  
  // Track animation state
  let hasAnimated = false;
  let fallbackTimer: ReturnType<typeof setTimeout>;

  // Set initial state (invisible)
  if (animation === 'fade') {
    node.style.opacity = '0';
  } else if (animation === 'slide-up') {
    node.style.opacity = '0';
    node.style.transform = 'translateY(40px)';
  } else if (animation === 'slide-in') {
    node.style.opacity = '0';
    node.style.transform = 'translateX(40px)';
  } else if (animation === 'scale') {
    node.style.opacity = '0';
    node.style.transform = 'scale(0.85)';
  } else if (animation === 'stagger') {
    if (staggerSelector) {
      const children = node.querySelectorAll(staggerSelector);
      children.forEach(child => {
        if (child instanceof HTMLElement) {
          child.style.opacity = '0';
        }
      });
    }
  }
  
  // Function to force content to be visible without animation
  const forceVisible = () => {
    if (animation === 'fade' || animation === 'slide-up' || animation === 'slide-in' || animation === 'scale') {
      node.style.opacity = '1';
      node.style.transform = 'none';
    } else if (animation === 'stagger' && staggerSelector) {
      const children = node.querySelectorAll(staggerSelector);
      children.forEach(child => {
        if (child instanceof HTMLElement) {
          child.style.opacity = '1';
        }
      });
    }
  };

  // Safety fallback - make content visible after a delay if animation hasn't triggered
  fallbackTimer = setTimeout(() => {
    if (!hasAnimated) {
      console.log('Animation fallback triggered for', node);
      forceVisible();
      hasAnimated = true;
    }
  }, 500); // 500ms fallback for faster initial display

  // Function to handle animations
  const animateIn = () => {
    if (animation === 'fade') {
      animate(
        node,
        { opacity: 1 },
        { 
          delay, 
          duration: duration || 1200,
          easing: spring({ damping: 20, stiffness: 70 }),
          ...options
        }
      );
    } else if (animation === 'slide-up') {
      animate(
        node,
        { 
          opacity: 1, 
          transform: 'translateY(0)' 
        },
        { 
          delay, 
          duration: duration || 1400,
          easing: spring({ damping: 20, stiffness: 60 }),
          ...options
        }
      );
    } else if (animation === 'slide-in') {
      animate(
        node,
        { 
          opacity: 1, 
          transform: 'translateX(0)' 
        },
        { 
          delay, 
          duration: duration || 1400,
          easing: spring({ damping: 20, stiffness: 60 }),
          ...options
        }
      );
    } else if (animation === 'scale') {
      animate(
        node,
        { 
          opacity: 1, 
          transform: 'scale(1)' 
        },
        { 
          delay, 
          duration: duration || 1400,
          easing: spring({ damping: 18, stiffness: 50 }),
          ...options
        }
      );
    } else if (animation === 'stagger' && staggerSelector) {
      const children = node.querySelectorAll(staggerSelector);
      animate(
        children,
        { opacity: 1 },
        { 
          delay: stagger(staggerDelay || 200, { start: delay }),
          duration: duration || 1000,
          easing: spring({ damping: 20, stiffness: 60 }),
          ...options
        }
      );
    }
  };

  // Check if element is already in viewport on load
  // For elements at the top of the page, we need special handling
  if (immediate) {
    // Use requestAnimationFrame to ensure DOM has rendered
    requestAnimationFrame(() => {
      // Force animation for elements at the top of the page (first screen)
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // If element is in the top part of the screen on load, animate it immediately
      // Updated calculation to ensure top elements are detected
      if (rect.top < windowHeight && rect.bottom > 0) {
        animateIn();
        hasAnimated = true;
        
        // Clear the fallback timer since we've already animated
        clearTimeout(fallbackTimer);
      }
    });
  }
  
  // Create IntersectionObserver 
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasAnimated) {
            animateIn();
            hasAnimated = true;
            
            // Clear the fallback timer since we've already animated
            clearTimeout(fallbackTimer);
            
            // If once is true, unobserve after animation
            if (once) {
              observer.unobserve(node);
            }
          }
        }
      });
    },
    {
      threshold: threshold,
      // Add margin to detect elements at the very top and bottom of viewport
      rootMargin: "50% 0px 50% 0px" 
    }
  );

  observer.observe(node);

  return {
    update(newParams: ScrollAnimationParams) {
      // Handle parameter updates - apply new parameters
      Object.assign(params, newParams);
    },
    destroy() {
      // Clean up resources
      observer.unobserve(node);
      clearTimeout(fallbackTimer);
      
      // Ensure element is visible when component is destroyed
      if (!hasAnimated) {
        forceVisible();
        hasAnimated = true;
      }
    }
  };
};