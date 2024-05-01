type RaceDetailProps = {
  title: string;
  distance: string;
  ascent: string;
  colour: string;
};

const RaceCard = ({ title, distance, ascent }: RaceDetailProps) => {
  const raceColours: { [key: string]: string } = {
    MINI: "bg-blue-500",
    HALF: "bg-green-500",
    MARATHON: "bg-yellow-500",
    ULTRA: "bg-purple-500",
  };

  const defaultColour = "bg-gray-500";
  const colour = raceColours[title] || defaultColour;

  return (
    <div
      className={`max-w-4xl  rounded-lg overflow-hidden shadow-xl ${colour} sm:w-500`}
    >
      <div className="text-white text-center py-3">
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
      <div className="p-4">
        <p className="text-gray-800 dark:text-gray-200">
          <span className="font-semibold">Distance:</span> {distance} km
        </p>
        <p className="text-gray-800 dark:text-gray-200">
          <span className="font-semibold">Ascent:</span> {ascent} m+
        </p>
      </div>
    </div>
  );
};

export default RaceCard;
