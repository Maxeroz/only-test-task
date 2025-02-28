import { useEffect, useMemo, useRef, useState } from "react";
import { Timeline } from "@components/Timeline";

import {
  HistoricalTimelineCircle,
  HistoricalTimelineWrapper,
  HistoricalTimelineTitle,
  HistoricalTimelineTopWrapper,
  HistoricalTimelineYear,
  HistoricalTimelineYearContainer,
  HistoricalTimelineCircleItem,
  CircleText,
  CircleItemWrapper,
} from "./HistoricalTimeline.styles";

import { gsap } from "gsap";
import { AnimatedCounter } from "@components/AnimatedCounter";
import { useMediaQuery } from "react-responsive";
import { HistoricalTimelineCounter } from "./components/HistoricalTimelineCounter";
import { HistoricalTimelinePagination } from "./components/HistoricalTimelinePagination";

import { useHistoricalTimelineAnimation } from "src/hooks/useHistoricalTimelineAnimation";
import { Events } from "./HistoricalTimeline.types";
import { MOBILE_WIDTH, TABLET_WIDTH } from "src/constants";
import { calculatePositions } from "./utils/calculatePositions";

const RADIUS = 265;

export const HistoricalTimeline = ({ events }: { events: Events }) => {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });
  const isTablet = useMediaQuery({ maxWidth: TABLET_WIDTH });

  const circleRadius = isTablet ? 230 : RADIUS;

  const positions = useMemo(
    () => calculatePositions(circleRadius, events.length, 0),
    [events.length, circleRadius]
  );

  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCircle, setActiveCircle] = useState(0);
  const [timelineKey, setTimelineKey] = useState(0);
  const circleRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (activeCircle > 0) {
      setActiveCircle((prev) => prev - 1);
      setTimelineKey((prevKey) => prevKey + 1);
    }
  };

  const handleNext = () => {
    if (activeCircle < events.length - 1) {
      setActiveCircle((prev) => prev + 1);
      setTimelineKey((prevKey) => prevKey + 1);
    }
  };

  useHistoricalTimelineAnimation(
    circleRef,
    itemsRef,
    activeCircle,
    events.length
  );

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;

      gsap.to(el, {
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, [hoveredIndex, activeCircle]);

  useEffect(() => {
    gsap.fromTo(
      ".circle-text",
      { opacity: 0 },
      { opacity: 1, duration: 4, ease: "power4" }
    );
  }, [activeCircle]);

  return (
    <HistoricalTimelineWrapper>
      <HistoricalTimelineTopWrapper>
        <HistoricalTimelineTitle>
          Исторические <br />
          даты
        </HistoricalTimelineTitle>

        <HistoricalTimelineYearContainer>
          <AnimatedCounter
            from={Number(
              events[activeCircle === 0 ? activeCircle : activeCircle - 1]
                .achievements[0].year
            )}
            to={Number(events[activeCircle].achievements[0].year)}
          >
            <HistoricalTimelineYear primary />
          </AnimatedCounter>

          <AnimatedCounter
            from={Number(
              events[
                activeCircle === 0 ? activeCircle : activeCircle - 1
              ].achievements.at(-1)?.year
            )}
            to={Number(events[activeCircle].achievements.at(-1)?.year)}
          >
            <HistoricalTimelineYear />
          </AnimatedCounter>
        </HistoricalTimelineYearContainer>

        {!isMobile && (
          <HistoricalTimelineCircle ref={circleRef} radius={circleRadius * 2}>
            {positions.map((pos, index) => {
              const isActiveOrHovered =
                index === activeCircle || index === hoveredIndex;

              return (
                <CircleItemWrapper
                  key={index}
                  ref={(el) => {
                    if (el) itemsRef.current[index] = el;
                  }}
                  style={{
                    top: `calc(50% + ${pos.y}px)`,
                    left: `calc(50% + ${pos.x}px)`,
                  }}
                >
                  <HistoricalTimelineCircleItem
                    isActive={isActiveOrHovered}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      setTimelineKey(index);
                      setActiveCircle(index);
                    }}
                  >
                    {isActiveOrHovered && index + 1}
                  </HistoricalTimelineCircleItem>

                  {index === activeCircle ? (
                    <CircleText className="circle-text">
                      {events[activeCircle].category}
                    </CircleText>
                  ) : null}
                </CircleItemWrapper>
              );
            })}
          </HistoricalTimelineCircle>
        )}

        {!isMobile && (
          <>
            <HistoricalTimelineCounter
              activeCircle={activeCircle}
              totalEvents={events.length}
            />

            <HistoricalTimelinePagination
              isPrevDisabled={activeCircle === 0}
              isNextDisabled={activeCircle === events.length - 1}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </>
        )}
      </HistoricalTimelineTopWrapper>

      <Timeline
        key={timelineKey}
        achievements={events[activeCircle].achievements}
        activeCircle={activeCircle}
        totalEvents={events.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </HistoricalTimelineWrapper>
  );
};
