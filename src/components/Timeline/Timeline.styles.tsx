import styled from "styled-components";

export const TimelineWrapper = styled.div({
  cursor: "pointer",
  position: "relative",
  width: "100%",
  padding: "0 78px",

  height: "35%",
  marginTop: "auto",

  "@media (max-width: 480px)": {
    marginTop: 0,
    width: "100%",
    padding: "20px 0px 0px",
    overflow: "hidden",
  },
});

export const TimelineEvent = styled.article({
  width: "100%",
  textAlign: "left",
  h3: {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: "25px",
    fontWeight: "bold",
    color: "var(--color-text-heading-primary)",
    "@media (max-width: 480px)": {
      fontSize: "16px",
    },
  },
  p: {
    fontSize: "20px",
    color: "var(--color-background-accent)",
    "@media (max-width: 1440px)": {
      fontSize: "14px",
    },
    "@media (max-width: 480px)": {
      fontSize: "14px",
      maxHeight: "80px",
      display: "-webkit-box",
      WebkitLineClamp: 4,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
});

export const TimelineNavigationButton = styled.button({
  top: "50px",
  position: "absolute",
  backgroundColor: "var(--color-primary-white)",
  color: "var(--color-text-heading-primary)",
  width: "40px",
  height: "40px",
  border: "none",
  borderRadius: "50%",
  fontSize: "10px",
  cursor: "pointer",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 15px 0 var(--color-shadow-middle)",
  "&:disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },
});

export const TimelinePrevButton = styled(TimelineNavigationButton)({
  left: "30px",
});

export const TimelineNextButton = styled(TimelineNavigationButton)({
  right: "30px",
});
