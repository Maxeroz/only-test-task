import styled from "styled-components";

export const PaginationContainer = styled.div({
  display: "flex",
  gap: "8px",
  marginTop: "auto",
  justifyContent: "center",
  paddingBottom: "32px",
});

export const PaginationDot = styled.button<{ active: boolean }>(
  ({ active }) => ({
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: active
      ? "var(--color-background-accent)"
      : "var(--color-border-strong)",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",

    "&:hover": {
      background: active
        ? "var(--color-background-accent)"
        : "var(--color-border-strong)",
    },
  })
);
