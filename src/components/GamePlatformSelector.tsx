import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { useGameQuery } from "../context/GameContext";

const GamePlatformSelector = () => {
  const { gameQuery, setGameQuery } = useGameQuery();

  const onSelectdPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };
  const { data, error } = usePlatforms();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            {gameQuery.platform?.name || "Platforms"}
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.map((platform) => (
                <Menu.Item
                  key={platform.id}
                  onClick={() => onSelectdPlatform(platform)}
                  value={platform.name}
                >
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};

export default GamePlatformSelector;
