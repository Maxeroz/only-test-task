import styled from "styled-components";
import { CSSProperties } from "react";

const commonAfterStyles: CSSProperties = {
  content: '""',
  position: "absolute",
  background: "var(--color-border-light)",
};

export const HistoricalTimelineWrapper = styled.section({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  "&::after": {
    ...commonAfterStyles,
    width: "1px",
    height: "100%",
    left: "50%",
    top: 0,
    transform: "translateX(-50%)",
    "@media (max-width: 480px)": {
      display: "none",
    },
  } as const,
  "@media (max-width: 480px)": {
    paddingTop: 0,
    minHeight: "100vh",
  } as const,
} as const);

export const HistoricalTimelineTopWrapper = styled.div({
  position: "relative",
  marginTop: "170px",
  marginBottom: "96px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&::after": {
    ...commonAfterStyles,
    height: "1px",
    width: "100%",
    top: "50%",
    left: 0,
    "@media (max-width: 480px)": {
      display: "none",
    },
  } as const,
  "@media (max-width: 1440px)": {
    marginTop: "100px",
    marginBottom: "50px",
  } as const,
  "@media (max-width: 480px)": {
    marginTop: "0px",
    marginBottom: "0px",
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  } as const,
} as const);

export const HistoricalTimelineTitle = styled.h2({
  position: "absolute",
  top: 0,
  left: 0,
  marginLeft: "78px",
  fontSize: "56px",
  fontWeight: 700,
  lineHeight: "67.2px",
  color: "var(--color-background-accent)",
  zIndex: 99,
  "&::before": {
    ...commonAfterStyles,
    left: "-78px",
    width: "5px",
    height: "135px",
    background:
      "linear-gradient(to bottom, var(--color-text-heading-primary), var(--color-text-heading-secondary))",
    "@media (max-width: 480px)": {
      display: "none",
    },
  } as const,
  "@media (max-width: 480px)": {
    lineHeight: "24px",
    marginLeft: "0px",
    position: "static",
    paddingTop: "59px",
    fontSize: "20px",
    textAlign: "left",
    marginBottom: "56px",
  } as const,
} as const);

interface HistoricalTimelineCircleProps {
  radius: string | number;
}

export const HistoricalTimelineCircle =
  styled.div<HistoricalTimelineCircleProps>(({ radius }) => ({
    position: "relative",
    width: typeof radius === "number" ? `${radius}px` : radius,
    height: typeof radius === "number" ? `${radius}px` : radius,
    border: "1px solid var(--color-border-medium)",
    borderRadius: "50%",
    zIndex: 1,
  }));

export const CircleItemWrapper = styled.div({
  position: "absolute",
});

export const CircleText = styled.span({
  position: "absolute",
  left: "45px",
  top: "-16px",
  fontSize: "20px",
  color: "var(--color-background-accent)",
  fontWeight: "700",
  whiteSpace: "nowrap",
});

export const HistoricalTimelineCircleItem = styled.button<{
  isActive?: boolean;
}>(
  ({ isActive }) =>
    ({
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: "1px solid var(--color-background-accent)",
      backgroundColor: isActive
        ? "var(--color-background-primary)"
        : "var(--color-background-accent)",
      color: "var(--color-background-accent)",
      cursor: "pointer",
      zIndex: 2,
      width: isActive ? "56px" : "5px",
      height: isActive ? "56px" : "5px",
      transition: "all 0.3s ease-in-out",
      transform: "translate(-50%, -50%)",
      "&::before": {
        ...commonAfterStyles,
        width: "40px",
        height: "40px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: "transparent",
        opacity: 0,
      } as const,
      ":hover, &::before:hover": {
        width: "56px",
        height: "56px",
        backgroundColor: "var(--color-background-primary)",
        transform: "translate(-50%, -50%) scale(1)",
      } as const,
    } as const)
);

export const HistoricalTimelineYearContainer = styled.div({
  display: "flex",
  gap: "100px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width: 1440px)": {
    gap: "65px",
  } as const,
  "@media (max-width: 480px)": {
    position: "static",
    transform: "none",
    flexDirection: "row",
    justifyContent: "center",
    gap: "25px",
    paddingBottom: "57px",
    borderBottom: "1px solid var(--color-border-light)",
    width: "100%",
  } as const,
} as const);

export const HistoricalTimelineYear = styled.span<{ primary?: boolean }>(
  ({ primary }) =>
    ({
      fontSize: "200px",
      fontWeight: "bold",
      color: primary
        ? "var(--color-text-heading-primary)"
        : "var(--color-text-heading-secondary)",
      "@media (max-width: 1440px)": {
        fontSize: "150px",
      } as const,
      "@media (max-width: 480px)": {
        fontSize: "56px",
      } as const,
    } as const)
);

export const HistoricalTimelinePaginationContainer = styled.div({
  display: "flex",
  position: "absolute",
  bottom: "80px",
  left: "78px",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  "@media (max-width: 480px)": {
    left: 0,
    bottom: "-190px",
    fontSize: "15px",
  } as const,
} as const);

export const HistoricalTimelinePaginationButton = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "56px",
  height: "56px",
  borderRadius: "50%",
  backgroundColor: "var(--color-background-primary)",
  border: "1px solid var(--color-background-accent)",
  cursor: "pointer",
  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  } as const,
  "@media (max-width: 480px)": {
    width: "25px",
    height: "25px",
  } as const,
} as const);
