import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeButton from "./ColorModeButton";
import GameSearchInput from "./GameSearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text fontSize="2xl">PlayVerse</Text>
      <GameSearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
