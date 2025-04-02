import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiCommodore, SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { GrGamepad } from "react-icons/gr";

interface Props {
  platforms: Platform[];
}

const GamePlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    "neo-geo": FaGamepad,
    "3do": GrGamepad,
    atari: SiAtari,
    "commodore-amiga": SiCommodore,
    sega: SiSega,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.400" />
      ))}
    </HStack>
  );
};

export default GamePlatformIconList;
