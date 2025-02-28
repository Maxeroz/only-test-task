import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { RefObject, useRef } from "react";

export const useHistoricalTimelineAnimation = (
  circleRef: RefObject<HTMLDivElement | null>,
  itemsRef: RefObject<(HTMLDivElement | null)[]>,
  activeCircle: number,
  totalCircles: number
) => {
  const prevActiveCircle = useRef(activeCircle);

  useGSAP(() => {
    if (!circleRef.current) return;

    const prevIndex = prevActiveCircle.current;
    let diff = activeCircle - prevIndex;

    if (Math.abs(diff) > totalCircles / 2) {
      diff = diff > 0 ? diff - totalCircles : diff + totalCircles;
    }

    const rotationAngle = gsap.getProperty(
      circleRef.current,
      "rotation"
    ) as number;
    const newRotation = rotationAngle - diff * (360 / totalCircles);

    gsap.to(circleRef.current, {
      rotation: newRotation,
      transformOrigin: "center center",
      duration: 0.9,
      ease: "expo",
    });

    itemsRef.current.forEach((circle) => {
      if (circle) {
        gsap.to(circle, {
          rotation: -newRotation,
          transformOrigin: "center center",
          duration: 0.9,
          ease: "expo",
        });
      }
    });

    prevActiveCircle.current = activeCircle;
  }, [activeCircle]);
};
