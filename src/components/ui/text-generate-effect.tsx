"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const highlightWords=["Sehaj","websites"];
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 10,
        delay: stagger(0.2),
      
        
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
            const cleanWord = word.replace(/[\n.]/g, ""); // Remove punctuation or line breaks
            const isHighlighted = highlightWords.includes(cleanWord);
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "dark:text-white text-black opacity-0 font-sans",
                isHighlighted ? "text-purple-500" : ""
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black sm: text-[16px] sm: px-[6px] md:text-xl md:px-[80px] sm: mt-[20px] xl:px-[0px] xl:text-3xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
