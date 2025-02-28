import GlobalStyles from "./styles/GlobalStyles";
import { useMediaQuery } from "react-responsive";

import { DesktopLayoutContainer } from "@components/LayoutContainer";
import { MobileLayoutContainer } from "@components/MobileLayoutContainer/MobileLayoutContainer";
import { HistoricalTimeline } from "@components/HistoricalTimeline";
import { EVENTS, MOBILE_WIDTH } from "./constants";

function App() {
  const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH });

  return (
    <>
      <GlobalStyles />
      {isMobile ? (
        <MobileLayoutContainer
          mainSection={<HistoricalTimeline events={EVENTS} />}
        />
      ) : (
        <DesktopLayoutContainer
          mainSection={<HistoricalTimeline events={EVENTS} />}
        />
      )}
    </>
  );
}

export default App;
