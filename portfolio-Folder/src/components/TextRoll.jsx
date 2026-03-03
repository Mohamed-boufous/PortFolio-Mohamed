"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "../lib/utils";

const STAGGER = 0.025;

const TextRoll = ({
  children,
  className,
  center = false,
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden whitespace-nowrap", className)}
    >
      <div className="relative block overflow-hidden"> {/* Container for first line */}
        <div className="flex">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
        </div>
      </div>
      
      <div className="absolute inset-0"> {/* Container for second line */}
        <div className="flex">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
        </div>
      </div>
    </motion.div>
  );
};

export default TextRoll;
