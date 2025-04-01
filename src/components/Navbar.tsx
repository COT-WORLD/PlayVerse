import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeButton from "./ColorModeButton";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
