import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import {
  TimelineEvent,
  TimelineNextButton,
  TimelinePrevButton,
  TimelineWrapper,
} from "./Timeline.styles";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { SwiperPagination } from "@components/SwiperPagination/SwiperPagination";
import { HistoricalTimelineCounter } from "@components/HistoricalTimeline/components/HistoricalTimelineCounter";
import { HistoricalTimelinePagination } from "@components/HistoricalTimeline/components/HistoricalTimelinePagination";
import { TimelineProps } from "./Timeline.types";

export const Timeline = ({
  achievements,
  activeCircle,
  totalEvents,
  onPrev,
  onNext,
}: TimelineProps) => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const swiperRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const swiperWrapperRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      gsap.fromTo(
        timelineRef.current,
        { opacity: 0 },
        { opacity: 1, delay: 0.5 }
      );
    },
    { scope: timelineRef }
  );

  const handleSlideChange = (newIndex: number) => {
    if (!swiperWrapperRef.current) return;

    const slidesPerView = isMobile ? 2 : 3;
    const containerWidth = isMobile ? 106 : 100;
    const step = containerWidth / slidesPerView;

    const maxIndex = achievements.length - slidesPerView;

    setActiveIndex(newIndex);
    setIsEnd(newIndex >= maxIndex);
    setIsBeginning(newIndex <= 0);

    gsap.to(swiperWrapperRef.current, {
      x: `-${newIndex * step}%`,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      handleSlideChange(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < achievements.length - 1) {
      handleSlideChange(activeIndex + 1);
    }
  };

  return (
    <>
      <TimelineWrapper ref={timelineRef}>
        <Swiper
          speed={0}
          style={{ maxWidth: "1440px", width: isMobile ? "120%" : "100%" }}
          ref={swiperRef}
          slidesPerView={isMobile ? 2 : 3}
          spaceBetween={isMobile ? 25 : 30}
          modules={[Navigation]}
          className="mySwiper"
          onInit={(swiper: SwiperType) => {
            swiperWrapperRef.current = swiper.wrapperEl as HTMLDivElement;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper: SwiperType) => {
            handleSlideChange(swiper.activeIndex);
          }}
        >
          <div ref={swiperWrapperRef} className="swiper-wrapper">
            {achievements.map((event, index) => {
              const isDimmed = isMobile && index === activeIndex + 1;

              return (
                <SwiperSlide
                  key={index}
                  style={{ opacity: isDimmed ? 0.4 : 1 }}
                >
                  <TimelineEvent>
                    <h3>{event.year}</h3>
                    <p>{event.description}</p>
                  </TimelineEvent>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>

        {!isMobile && (
          <>
            {!isBeginning && (
              <TimelinePrevButton
                onClick={handlePrev}
                aria-label="Предыдущий слайд"
              >
                {"<"}
              </TimelinePrevButton>
            )}
            {!isEnd && (
              <TimelineNextButton
                onClick={handleNext}
                aria-label="Следующий слайд"
              >
                {">"}
              </TimelineNextButton>
            )}
          </>
        )}
      </TimelineWrapper>

      {isMobile && (
        <>
          <HistoricalTimelineCounter
            activeCircle={activeCircle}
            totalEvents={totalEvents}
          />

          <HistoricalTimelinePagination
            isPrevDisabled={activeCircle === 0}
            isNextDisabled={activeCircle === totalEvents - 1}
            onPrev={onPrev}
            onNext={onNext}
            variant="mobile"
          />
        </>
      )}

      {isMobile && (
        <SwiperPagination
          total={achievements.length}
          activeIndex={activeIndex}
          onClick={handleSlideChange}
        />
      )}
    </>
  );
};
