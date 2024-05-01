import { RACE_DETAILS } from "@/constants";

type RaceDetailProps = {
  title: string;
  distance: string;
  ascent: string;
  colour: string;
};

const RaceCard = ({ title, distance, ascent }: RaceDetailProps) => {
  const race = RACE_DETAILS.find((race) => race.title === title);
  const bgColour = race ? `bg-${race.colour}-500` : "bg-blue-500";
  const hoverColour = race ? `bg-${race.colour}-800` : "bg-blue-500";

  return (
    <button
      className={`max-w-4xl  rounded-lg overflow-hidden shadow-xl ${bgColour} sm:w-500 transition duration-300 ease-in-out transform hover:scale-105 hover:${hoverColour} cursor-pointer`}
    >
      <div className="text-white text-center py-3">
        <h2 className="font-bold text-xl text-gray-100 text-shadow-lg">
          {title}
        </h2>
      </div>
      <div className="p-4">
        <p className="text-gray-800 dark:text-gray-200">
          <span className="font-semibold">Distance:</span> {distance} km
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          <span className="font-semibold">Ascent:</span> {ascent} m+
        </p>
      </div>
    </button>
  );
};

export default RaceCard;
