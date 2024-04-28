import { RACE_DETAILS } from "@/constants";
import RaceCard from "./races/race-card";

const Home = () => {
  return (
    <>
      <span className="font-bold text-4xl text-center block mb-4">
        Vegan Trail Challenge!
      </span>

      {/* Subtitle and event description */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Let the adventure begin!</h2>
        <p className="text-lg">Short description of the event...</p>
      </div>

      {/* Races section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {RACE_DETAILS.map((race) => (
          <RaceCard
            key={race.title}
            title={race.title}
            distance={race.distance}
            ascent={race.ascent}
            photo={race.photo}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
