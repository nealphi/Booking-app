import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import { Button, Flex } from "@radix-ui/themes";

const SearchBar = () => {
  const search = useSearchContext();
  const navigate = useNavigate();
  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search")
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 p-5 min-h-10 bg-blue-950 rounded shadow-md grid  grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 items-center gap-4"
    >
      <Flex align={'center'} className="bg-white p-2 rounded" >
        <MdTravelExplore size={25} className="mr-2" />
        <input
          placeholder="Where?"
          className="text-md w-full focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </Flex>

      <Flex className=" bg-white px-2 py-1 gap-2 rounded">
        <label className="items-center flex">
          Adults:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        </Flex>
         <Flex className=" bg-white px-2 py-1 gap-2 rounded">
        <label className="items-center flex">
          Children:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={0}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </Flex>

      <Flex >
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="w-full bg-white p-2 focus:outline-none rounded"
          wrapperClassName="min-w-full"
        />
      </Flex>
      <Flex>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="w-full bg-white p-2 focus:outline-none rounded"
          wrapperClassName="min-w-full"
        />
      </Flex>

      <Flex justify={'end'} gap={'3'} >
        <Button size={'3'} >
          Search
        </Button>
        <Button size={'3'} className=" !bg-red-600 hover:!bg-red-700">
          Clear
        </Button>
      </Flex>
    </form>
  );
};

export default SearchBar;
