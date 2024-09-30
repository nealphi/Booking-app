import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { Flex, Text, Button } from "@radix-ui/themes";

const Header: React.FC = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <Flex
      align={"center"}
      justify={"between"}
      minHeight={{initial:"5vh", md:'10vh'}}
      mx={{ initial: "3", xs: "5" }}
    >
      <Text
        size={{
          initial: "3",
          xs: "5",
          md: "7",
        }}
        weight={"bold"}
        align={"center"}
        style={{ letterSpacing: "tight" }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "var(--accent-10)" }}
        >
          StayEscape.com
        </Link>
      </Text>

      <Flex align={"center"} justify={"between"} gap="2">
        {isLoggedIn ? (
          <>
            <Link to="/my-bookings">
              <Button
                size={{
                  initial: "1",
                  xs: "2",
                  sm: "3",
                }}
                variant="outline"
                style={{ fontWeight: "bold" }}
              >
                Bookings
              </Button>
            </Link>
            <Link to="/my-hotels">
              <Button
                size={{
                  initial: "1",
                  xs: "2",
                  sm: "3",
                }}
                variant="outline"
                style={{ fontWeight: "bold" }}
              >
                Hotels
              </Button>
            </Link>
            <SignOutButton />
          </>
        ) : (
          <Link to="/sign-in">
            <Button
              variant="solid"
              size={{
                initial: "1",
                xs: "2",
                sm: "3",
              }}
              style={{ fontWeight: "bold" }}
            >
              Sign in
            </Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
