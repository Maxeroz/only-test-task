import styled from "styled-components";

export const LayoutContainerWrapper = styled.div({
  display: "flex",
  backgroundColor: "var(--color-background-primary)",
});

export const SecondSection = styled.div({
  flexGrow: 1,
  overflow: "auto",
  margin: "0 auto",
  borderRight: "1px solid var(--color-border-light)",
  borderLeft: "1px solid var(--color-border-light)",
  maxWidth: "1440px",
});
