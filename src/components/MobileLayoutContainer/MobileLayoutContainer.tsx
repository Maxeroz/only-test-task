import { MobileLayoutWrapper } from "./MobileLayoutContainer.styles";
import { LayoutContainerProps } from "./MobileLayoutContainer.types";

export const MobileLayoutContainer = ({
  mainSection,
}: LayoutContainerProps) => {
  return <MobileLayoutWrapper>{mainSection}</MobileLayoutWrapper>;
};
