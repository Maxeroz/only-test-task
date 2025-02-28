import {
  PaginationButton,
  PaginationContainer,
} from "./HistoricalTimelinePagination.styles";
import { HistoricalTimelinePaginationProps } from "./HistoricalTimelinePagination.types";

export const HistoricalTimelinePagination = ({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}: HistoricalTimelinePaginationProps) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={onPrev} disabled={isPrevDisabled}>
        {"<"}
      </PaginationButton>
      <PaginationButton onClick={onNext} disabled={isNextDisabled}>
        {">"}
      </PaginationButton>
    </PaginationContainer>
  );
};
