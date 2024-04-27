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
      <h1>RaceCard</h1>
      <p>{title}</p>
      <p>{distance}km</p>
      <p>{ascent}m+</p>
      <Image src={photo} alt={title} />
    </>
  );
};

export default RaceCard;
