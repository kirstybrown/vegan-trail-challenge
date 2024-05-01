import { RACE_DETAILS } from "@/constants";
import RacePage from "../race-page";

const UltraRacePage = () => {
  return (
    <>
      <RacePage
        title={RACE_DETAILS[3].title}
        distance={RACE_DETAILS[3].distance}
        ascent={RACE_DETAILS[3].ascent}
        colour={RACE_DETAILS[3].colour}
      />
    </>
  );
};

export default UltraRacePage;
