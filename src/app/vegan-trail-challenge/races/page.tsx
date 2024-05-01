import { RACE_DETAILS } from "@/constants";
import RaceCard from "./race-card";

const RacesSummary = () => {
  return (
    <>
      <h1>RacesPage</h1>
      {RACE_DETAILS.map((race) => (
        <RaceCard
          key={race.title}
          title={race.title}
          distance={race.distance}
          ascent={race.ascent}
          colour={race.colour}
        />
      ))}
    </>
  );
};

export default RacesSummary;
