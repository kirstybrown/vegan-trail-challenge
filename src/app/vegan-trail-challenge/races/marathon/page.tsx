import { RACE_DETAILS } from "@/constants";
import RacePage from "../race-page";

const MarathonRacePage = () => {
  return (
    <>
      <RacePage
        title={RACE_DETAILS[2].title}
        distance={RACE_DETAILS[2].distance}
        ascent={RACE_DETAILS[2].ascent}
        colour={RACE_DETAILS[2].colour}
      />
    </>
  );
};

export default MarathonRacePage;
