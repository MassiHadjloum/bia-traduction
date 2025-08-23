"use client";
// import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";


const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  // const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const locale = useLocale();
  const wordVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // stagger naturel sans recalcul forcé
        duration: 0.6,
      },
    }),
  };

  // useEffect(() => {
  //   animate(
  //     "span",
  //     {
  //       opacity: 1,
  //     },
  //     {
  //       duration: 2,
  //       delay: stagger(0.2),
  //     }
  //   );
  // }, [scope.current]);

  // const renderWords = () => {
  //   return (
  //     <motion.div ref={scope}>
  //       {wordsArray.map((word, idx) => {
  //         return (
  //           <motion.span
  //             key={word + idx}
  //             // change here if idx is greater than 3, change the text color to #CBACF9
  //             className={` ${idx > 2 ? "text-purple" : "dark:text-white text-black"
  //               } opacity-0`}
  //           >
  //             {word}{" "}
  //           </motion.span>
  //         );
  //       })}
  //     </motion.div>
  //   );
  // };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4 leading-snug tracking-wide text-center"
         dir={locale === "ar" ? "rtl" : "ltr"} >
        <noscript>
          <h2 className="text-center text-[32px] md:text-5xl lg:text-6xl font-bold">
            {words}
          </h2>
        </noscript>
        {wordsArray.map((word, i) => (
          <motion.span
            key={word + i}
            custom={i}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className={cn(
              i > 2 ? "text-purple" : "dark:text-white text-black",
              "inline-block opacity-0 mr-1 will-change-transform will-change-opacity"
            )}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>

  );
};

export default TextGenerateEffect