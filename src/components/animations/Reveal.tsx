import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const Reveal = ({ children, delay = 0, direction = 'up' }: RevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fallback for environments where IntersectionObserver is not available or disabled by reduce motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const baseClass = "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:translate-x-0";
  
  let hiddenClass = "opacity-0 ";
  if (direction === 'up') hiddenClass += "translate-y-6";
  else if (direction === 'down') hiddenClass += "-translate-y-6";
  else if (direction === 'left') hiddenClass += "translate-x-6";
  else if (direction === 'right') hiddenClass += "-translate-x-6";
  else if (direction === 'none') hiddenClass += "scale-95";

  const visibleClass = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${baseClass} ${isVisible ? visibleClass : hiddenClass}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
