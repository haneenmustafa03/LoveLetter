import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TypewriterTitle = ({ text = "", className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const LETTER_DELAY = 200;

  useEffect(() => {

    setDisplayedText("");

    const letters = text.split('');
    const timeouts = [];

    letters.forEach((letter, index) => {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + letter);
      }, index * LETTER_DELAY);
      
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [text]);

  return (
    <motion.h1
      className={`text-4xl font-bold text-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {displayedText}
    </motion.h1>
  );
};
