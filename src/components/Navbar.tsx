import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeButton from "./ColorModeButton";
import GameSearchInput from "./GameSearchInput";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text fontSize="2xl">PlayVerse</Text>
      <GameSearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
