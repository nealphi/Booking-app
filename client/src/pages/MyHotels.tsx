import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import { Flex } from "@radix-ui/themes";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    () => apiClient.fetchMyHotels(),
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span>No Hotels Found</span>;
  }

  return (
    <div className="space-y-5 m-5">
      <Flex justify={'end'}>
        <Link
          to="/add-hotel"
          className="flex bg-teal-600 rounded text-white text-lg  px-5 py-2 hover:bg-teal-700"
        >
          Add Hotel
        </Link>
      </Flex>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div className="flex flex-col justify-between bg-white border border-slate-300 rounded-lg p-8 gap-5">
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <div className="whitespace-pre-line">{hotel.description}</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2">
              <div className="border border-teal-600 rounded-sm p-3 flex items-center gap-2">
                <BsMap />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-teal-600 rounded-sm p-3 flex items-center gap-2">
                <BsBuilding />
                {hotel.type}
              </div>
              <div className="border border-teal-600 rounded-sm p-3 flex items-center gap-2">
                <BiMoney />
                {hotel.pricePerNight} per night
              </div>
              <div className="border border-teal-600 rounded-sm p-3 flex items-center gap-2">
                <BiHotel />
                {hotel.adultCount} adults, {hotel.childCount}{" "}
                {hotel.childCount > 1 ? "children" : "child"}
              </div>
              <div className="border border-teal-600 rounded-sm p-3 flex items-center gap-2">
                {Array.from({ length: hotel.starRating }).map((_, index) => (
                  <BiStar key={index} />
                ))}{" "}
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="flex bg-teal-600 rounded text-white text-lg  p-2 hover:bg-teal-700"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
