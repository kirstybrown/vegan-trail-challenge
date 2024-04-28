import Image from "next/image";

type RaceCardProps = {
  title: string;
  distance: string;
  ascent: string;
  photo: string;
};

const RaceCard = ({ title, distance, ascent, photo }: RaceCardProps) => {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={photo}
          alt={title}
          width={24}
          height={24}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
          <p className="text-gray-700 text-base text-center">
            Distance: {distance}km | Ascent: {ascent}m+
          </p>
        </div>
      </div>
    </>
  );
};

export default RaceCard;
