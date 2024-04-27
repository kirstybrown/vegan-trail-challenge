import { RACE_DETAILS } from "@/constants";
import RaceCard from "./race-card";

const RacesPage = () => {
  return (
    <>
      <h1>RacesPage</h1>
      {RACE_DETAILS.map((races) => (
        <RaceCard
          title={races.title}
          distance={races.distance}
          ascent={races.ascent}
          photo={races.photo}
        />
      ))}
    </>
  );
};

export default RacesPage;
