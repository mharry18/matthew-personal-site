import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1440));

  const handleResize = () => {
    requestAnimationFrame(() => {
    setScreenWidth(window.innerWidth);
  });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize);
    

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  }, []);

  return screenWidth;
};

export default useScreenWidth;
