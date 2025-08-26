import { SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGameQuery } from "../context/GameContext";
import { useMemo } from "react";

const GameGrid = () => {
  const { gameQuery } = useGameQuery();
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletonCount =
    useBreakpointValue({ base: 4, md: 6, lg: 9, xl: 12 }) || 9;

  if (error) return <Text>{error}</Text>;
  const renderedGames = useMemo(() => {
    return data.map((game) => <GameCard key={game.id} game={game} />);
  }, [data]);
  return (
    <SimpleGrid minChildWidth="sm" gap={5} padding={3}>
      {isLoading &&
        Array(skeletonCount)
          .fill(0)
          .map((_, index) => <GameCardSkeleton key={index} />)}
      {renderedGames}
    </SimpleGrid>
  );
};

export default GameGrid;
