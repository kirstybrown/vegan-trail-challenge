import { RACE_DETAILS } from "@/constants";
import RacePage from "../race-page";

const MiniRacePage = () => {
  return (
    <>
      <RacePage
        title={RACE_DETAILS[0].title}
        distance={RACE_DETAILS[0].distance}
        ascent={RACE_DETAILS[0].ascent}
        colour={RACE_DETAILS[0].colour}
      />
    </>
  );
};

export default MiniRacePage;
