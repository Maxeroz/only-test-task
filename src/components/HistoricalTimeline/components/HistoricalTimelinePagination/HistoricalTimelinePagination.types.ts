export interface HistoricalTimelinePaginationProps {
  onPrev: () => void;
  onNext: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  variant?: "desk" | "mobile";
}
