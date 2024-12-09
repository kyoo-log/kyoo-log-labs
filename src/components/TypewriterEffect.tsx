import React, { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  text: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
      {displayText}
      <span className="animate-pulse">_</span>
    </h1>
  );
};

export default TypewriterEffect;