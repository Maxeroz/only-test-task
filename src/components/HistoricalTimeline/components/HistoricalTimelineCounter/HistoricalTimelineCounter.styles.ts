import styled from "styled-components";

export const StyledHistoricalTimelineCounter = styled.span({
  position: "absolute",
  color: "var(--color-background-accent)",
  fontSize: "14px",
  fontWeight: 400,
  bottom: "75px",
  left: "78px",

  "@media (max-width: 480px)": {
    bottom: "45px",
    left: "0",
  },
});
