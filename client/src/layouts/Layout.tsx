import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Flex } from "@radix-ui/themes";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      direction={"column"}
      minWidth={"390px"}
      minHeight={"100vh"}
      className="bg-stone-150"
    >
      <Header />

      <Flex justify={"center"} flexGrow={"1"} align={"center"} m={'0'}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
