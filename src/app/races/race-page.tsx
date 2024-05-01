type RaceDetailProps = {
  title: string;
  distance: string;
  ascent: string;
  colour: string;
};

const RacePage = ({ title, distance, ascent }: RaceDetailProps) => {
  return (
    <>
      <h1 className="text-4xl lg:text-5xl font-bold title-font mb-4 text-gray-800">
        {title}
      </h1>
    </>
  );
};

export default RacePage;
