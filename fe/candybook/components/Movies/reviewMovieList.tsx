import { Image } from "@nextui-org/react";
import ReviewMovieCard from "../Card/reviewMovieCard";

interface CardEpisodeProps {
  dataVideos: Record<string, any>;
  onCardClick?: () => void;
}

export default function ReviewMovieList({ dataVideos, onCardClick }: CardEpisodeProps) {
  return dataVideos?.length > 0 ? (
    dataVideos?.map(function (item) {
      return (
        <div key={item.id}>
          <ReviewMovieCard
            cardData={item}
            onCardClick={onCardClick}
          />
        </div>
      );
    })
  ) : (
    <div className="text-4xl text-gray-700 p-10 w-full place-items-center text-center">
      <div>Opps... I cannot find any book !! ~miaw</div>
      <Image
        alt="That's Not My Cat Book"
        className="object-cover"
        src="/image/no-result.gif"
        width={300}
        height={300}
      />
    </div>
  );
}
