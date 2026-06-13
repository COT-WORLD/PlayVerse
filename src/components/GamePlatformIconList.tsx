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
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { GrGamepad } from "react-icons/gr";

interface Props {
  platforms: Platform[];
}

// Nintendo Switch SVG as a proper component
const NintendoSwitchIcon: IconType = ({
  className,
  style,
  size,
  color,
  title,
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size || "1em"}
    height={size || "1em"}
    className={className}
    style={style}
    color={color}
    aria-label={title}
  >
    <path d="M14.5 2h-5C5.5 2 2 5.5 2 10s3.5 8 7.5 8h5c4 0 7.5-3.5 7.5-8S18.5 2 14.5 2zM7 14c-2 0-3.5-1.5-3.5-3.5S5 7 7 7s3.5 1.5 3.5 3.5S9 14 7 14zm10.5-3.5c0 2-1.5 3.5-3.5 3.5s-3.5-1.5-3.5-3.5S12 7 14 7s3.5 1.5 3.5 3.5z" />
  </svg>
);

const GamePlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: NintendoSwitchIcon,
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
