import { RACE_DETAILS } from "@/constants";
import RacePage from "../race-page";

const HalfRacePage = () => {
  return (
    <>
      <RacePage
        title={RACE_DETAILS[1].title}
        distance={RACE_DETAILS[1].distance}
        ascent={RACE_DETAILS[1].ascent}
        colour={RACE_DETAILS[1].colour}
      />
    </>
  );
};

export default HalfRacePage;
