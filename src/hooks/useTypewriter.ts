import { useEffect, useState } from 'react';

interface UseTypewriterOptions {
  texts: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  holdDelay?: number;
}

export function useTypewriter({
  texts,
  typingSpeed = 100,
  erasingSpeed = 50,
  holdDelay = 2000,
}: UseTypewriterOptions) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const current = texts[index];

    if (isTyping) {
      if (text.length < current.length) {
        const timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), holdDelay);
        return () => clearTimeout(timeout);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => setText(text.slice(0, -1)), erasingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIndex((i) => (i + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [text, isTyping, index, texts, typingSpeed, erasingSpeed, holdDelay]);

  return { text, isTyping };
}
