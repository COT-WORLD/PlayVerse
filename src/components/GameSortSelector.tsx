import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useGameQuery } from "../context/GameContext";

const GameSortSelector = () => {
  const { gameQuery, setGameQuery } = useGameQuery();

  const handleSelectdSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSortOder = sortOrders.find(
    (order) => order.value === gameQuery.sortOrder
  );
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            Order by: {selectedSortOder?.label || "Relevance"}
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrders.map((order) => (
                <Menu.Item
                  key={order.value}
                  onClick={() => handleSelectdSortOrder(order.value)}
                  value={order.label}
                >
                  {order.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};

export default GameSortSelector;
