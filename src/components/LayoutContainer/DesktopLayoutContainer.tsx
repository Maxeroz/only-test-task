import {
  LayoutContainerWrapper,
  SecondSection,
} from "./DesktopLayoutContainer.styles";
import { LayoutContainerProps } from "./DesktopLayoutContainer.types";

export const DesktopLayoutContainer = ({
  mainSection,
}: LayoutContainerProps) => {
  return (
    <LayoutContainerWrapper>
      <SecondSection>{mainSection}</SecondSection>
    </LayoutContainerWrapper>
  );
};
