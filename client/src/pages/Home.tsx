import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LatestDestinationCard";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { Box, Flex, Text } from "@radix-ui/themes";

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 3) || [];
  const bottomRowHotels = hotels?.slice(3) || [];

  return (
    <Box>
      <Hero />
      <SearchBar />
      <Flex direction={"column"} mx={"5%"} mb={'5'}>
        <Text
          size={{
            initial: "4",
            xs: "5",
            md: "7",
          }}
          weight={"bold"}
          align={"left"}
          style={{ letterSpacing: "tight" }}

        >
          Latest Destinations
        </Text>
        <Text mb={"5"}>Most recent desinations added by our hosts</Text>
        <div className="grid gap-4">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {topRowHotels.map((hotel) => (
              <LatestDestinationCard hotel={hotel} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {bottomRowHotels.map((hotel) => (
              <LatestDestinationCard hotel={hotel} />
            ))}
          </div>
        </div>
      </Flex>
    </Box>
  );
};

export default Home;
