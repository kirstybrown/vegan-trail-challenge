import { RACE_DETAILS } from "@/constants";
import Link from "next/link";
import RaceCard from "./races/race-card";

const Home = () => {
  return (
    <>
      <span className="font-bold text-4xl text-center block mb-4">
        Vegan Trail Challenge
      </span>

      {/* Subtitle and event description */}
      <div className="text-left mb-8 px-8 py-4">
        <h2 className="text-2xl font-bold">Let the adventure begin!</h2>
        <br />
        <p className="text-lg">
          Get ready to lace up your running shoes and immerse yourself in an
          unforgettable adventure of scenic trails, delicious vegan cuisine, and
          a vibrant community of fellow trail runners. Prepare to embark on an
          exhilarating adventure of trail running, vegan delights, and
          community.
        </p>
        <br />
        <h2 className="text-2xl font-bold">Beautiful Races...</h2>
        <br />
        <p className="text-lg">
          Whether you're a seasoned trail runner or a beginner, there's a route
          for everyone, with 4 possible races to choose the challenge that's
          best for you.
        </p>
      </div>

      {/* Races section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {RACE_DETAILS.map((race) => (
            <div key={race.title}>
              <Link href={`/races/${race.title.toLowerCase()}`}>
                <RaceCard
                  title={race.title}
                  distance={race.distance}
                  ascent={race.ascent}
                  colour={race.colour}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="text-left mb-8 px-8 py-6">
        <h2 className="text-2xl font-bold">
          Nourishing & Delicious Vegan Treats...
        </h2>
        <br />
        <p className="text-lg">
          Incredible vegan food before, during and after the races! No need to
          bring a tupperware or worry if there'll be vegan options at the aid
          stations. In this event you won't be going hungry!
        </p>

        <br />
        <p className="text-lg"></p>
      </div>
    </>
  );
};

export default Home;
