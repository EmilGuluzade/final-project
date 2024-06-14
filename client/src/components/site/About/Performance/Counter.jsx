import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ target, duration ,children }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Bir kere tetiklensin
    threshold: 0.1 // %10 göründüğünde tetiklenir
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / (duration / 100);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(interval);
          start = target;
        }
        setCount(Math.floor(start));
      }, 100);
    }
  }, [inView, target, duration]);

  return (
<div class="number" ref={ref} ><span data-count="90">{count}</span>{children}</div>
  );
};

export default Counter;