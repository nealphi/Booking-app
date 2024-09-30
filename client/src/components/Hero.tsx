import { Flex, Text } from "@radix-ui/themes";
import "@fontsource/playfair-display-sc";
import "@fontsource-variable/quicksand";

const Hero = () => {
  return (
    <Flex
      className="text-center text-white"
      px={{
        initial: "2",
        md: "5",
      }}
      py={"1.5rem"}
      align={"center"}
      justify={"center"}
      style={{
        backgroundImage: "url('./bg-hotel2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      minHeight= {{ initial: "40vh", sm: "60vh", lg:"75vh" }}

    >
      <Flex direction={"column"} gap={"2"} align={"center"} justify={"center"}>
        <Text
          my={{ initial: "1", sm: "3"}}
          size={{ initial: "8",  md: "9" }}
          style={{ fontFamily: "Playfair Display SC" }}
        >
          "Your Stay, Your Escape"
        </Text>
        <Text
          my={{ initial: "1", sm: "3"}}
          mx={{ initial: "1", sm: "0"}}

          size={{ initial: "3", sm: "5", md: "7" }}
          style={{
            fontFamily: "Quicksand Variable",
            letterSpacing: 3
          }}
        >
          Effortless Bookings for Every Journey
        </Text>
      </Flex>
    </Flex>
  );
};

export default Hero;
