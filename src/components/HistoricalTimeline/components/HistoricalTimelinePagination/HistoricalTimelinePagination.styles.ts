import styled from "styled-components";

export const PaginationContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  gap: "20px",
  bottom: "0px",
  left: "78px",

  "@media (max-width: 480px)": {
    bottom: "10px",
    left: "0",
    fontSize: "15px",
    gap: "8px",
  },
});

export const PaginationButton = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "var(--color-background-primary)",
  color: "var(--color-background-accent)",
  border: "1px solid var(--color-border-bold)",
  cursor: "pointer",
  width: "56px",
  height: "56px",
  fontSize: "18px",

  "@media (max-width: 480px)": {
    width: "25px",
    height: "25px",
    fontSize: "12px",
  },

  "&:disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },
});
