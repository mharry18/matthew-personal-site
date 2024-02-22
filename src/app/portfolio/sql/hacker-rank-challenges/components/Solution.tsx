import React, { useEffect, useRef } from 'react';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';

type SolutionProps = {
  solution: string;
};

const Solution = (props: SolutionProps) => {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Code block is visible in the viewport
        if (entry.isIntersecting && codeRef.current) {
          Prism.highlightElement(codeRef.current);
          observer.unobserve(codeRef.current); // Stop observing once highlighted
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the code block is visible
    );

    if (codeRef.current) {
      observer.observe(codeRef.current);
    }

    return () => {
      if (codeRef.current) {
        observer.unobserve(codeRef.current);
      }
    };
  }, [codeRef]);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre ref={codeRef}>
      <code className="language-sql">{props.solution}</code>
    </pre>
  );
};

export default Solution;
