import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedCounterProps } from "./AnimatedCounter.types";

export const AnimatedCounter = ({
  from,
  to,
  children,
}: AnimatedCounterProps) => {
  const countRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!countRef.current) return;

    gsap.fromTo(
      countRef.current,
      { innerText: from },
      {
        innerText: to,
        duration: 1,
        snap: { innerText: 1 },
        ease: "power1.out",
      }
    );
  }, [from, to]);

  return React.cloneElement(children, { ref: countRef });
};
