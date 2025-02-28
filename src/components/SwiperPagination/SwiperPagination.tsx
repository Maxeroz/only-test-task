import { PaginationContainer, PaginationDot } from "./SwiperPagination.styles";
import { SwiperPaginationProps } from "./SwiperPagination.types";

export const SwiperPagination = ({
  total,
  activeIndex,
  onClick,
}: SwiperPaginationProps) => {
  return (
    <PaginationContainer>
      {Array.from({ length: total - 1 }).map((_, index) => (
        <PaginationDot
          key={index}
          active={index === activeIndex}
          onClick={() => onClick(index)}
        />
      ))}
    </PaginationContainer>
  );
};
