import { Heading } from "@chakra-ui/react";
import { useGameQuery } from "../context/GameContext";

const GameHeading = () => {
  const { gameQuery } = useGameQuery();
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginBottom={2} size="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
