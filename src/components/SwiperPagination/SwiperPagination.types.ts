export interface SwiperPaginationProps {
  total: number;
  activeIndex: number;
  onClick: (index: number) => void;
}
