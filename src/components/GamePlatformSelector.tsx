import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const GamePlatformSelector = () => {
  const { data, error } = usePlatforms();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            Platforms
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.map((platform) => (
                <Menu.Item key={platform.id} value={platform.name}>
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
