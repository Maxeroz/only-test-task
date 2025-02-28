import { ReactElement } from "react";

export interface AnimatedCounterProps {
  from: number;
  to: number;
  children: ReactElement<{ ref?: React.Ref<HTMLElement> }>;
}
