import { Flex, Text } from "@radix-ui/themes";

const Footer = () => {
  return (
    <Flex
      justify={"between"}
      align={"center"}
      px={{
        initial: "2",
        md: "9",
      }}
      py={"5"}
      className="bg-teal-600 text-center text-white"
      minHeight={'10vh'}
    >
      <Text
        weight={"bold"}
        size={{
          initial: "4",
          xs: "5",
          md: "7",
        }}
      >
        StayEscape.com
      </Text>
      <Flex gap={'3'} align={'center'}>
        <Text
          weight={"bold"}
          size={{
            initial: "1",
            xs: "2",
            sm: "3",
          }}
        >
          Privacy Policy
        </Text>
        <Text
          weight={"bold"}
          size={{
            initial: "1",
            xs: "2",
            sm: "3",
          }}
        >
          Terms of Service
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
