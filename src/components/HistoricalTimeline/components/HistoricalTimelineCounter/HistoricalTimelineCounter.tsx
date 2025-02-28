import { StyledHistoricalTimelineCounter } from "./HistoricalTimelineCounter.styles";
import { HistoricalTimelineCounterProps } from "./HistoricalTimelineCounter.types";

export const HistoricalTimelineCounter = ({
  activeCircle,
  totalEvents,
}: HistoricalTimelineCounterProps) => {
  return (
    <StyledHistoricalTimelineCounter>
      {String(activeCircle + 1).padStart(2, "0")}/0{totalEvents}
    </StyledHistoricalTimelineCounter>
  );
};
