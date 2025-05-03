export function inView(node: HTMLElement, params = { threshold: 0.2 }) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.dispatchEvent(new CustomEvent('enter'));
          observer.unobserve(node);
        }
      });
    },
    {
      threshold: params.threshold
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}