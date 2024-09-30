import { AiFillStar } from "react-icons/ai";
import { HotelType } from "../../../server/src/shared/types";
import { Link } from "@radix-ui/themes";

type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-5 gap-8">
      <div className="w-full h-[300px]">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr]">
        <div>
          <div className="flex items-center">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map(() => (
                <AiFillStar className="fill-yellow-400" />
              ))}
            </span>
            <span className="ml-1 text-sm">{hotel.type}</span>
          </div>
          <Link
            href={`/detail/${hotel._id}`}
            weight={'bold'}
          >
            {hotel.name}
          </Link>
        </div>

        <div>
          <div className="line-clamp-4">{hotel.description}</div>
        </div>

        <div className="grid sm:grid-cols-2 whitespace-nowrap gap-2">
          <div className="flex gap-1 items-center ">
            {hotel.facilities.slice(0, 3).map((facility) => (
              <span className="border border-red-600 text-red-600 p-1 rounded-lg text-xs whitespace-nowrap">
                {facility}
              </span>
            ))}
            <span className="text-sm text-red-600">
              {hotel.facilities.length > 3 &&
                `+${hotel.facilities.length - 3} more`}
            </span>
          </div>
          <div className="flex sm:flex-col items-end gap-1">
            <span className="font-bold"> CAD${hotel.pricePerNight} per night</span>
            <Link
              href={`/detail/${hotel._id}`} weight={'bold'}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;