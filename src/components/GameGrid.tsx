import {
  SimpleGrid,
  Text,
  useBreakpointValue,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { useEffect, Fragment } from "react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGameQuery } from "../context/GameContext";
import { useGamesInfiniteDeferred } from "../hooks/useGamesInfiniteDeferred";

const GameGrid = () => {
  const { gameQuery } = useGameQuery();
  const {
    dataFlat,
    showRealUI,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading, // still true while very first page is fetched
    isError,
    error,
  } = useGamesInfiniteDeferred(gameQuery);

  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  if (isError) return <Text color="red.500">{error.message}</Text>;

  // skeleton stays until every image of the *current* viewport is ready
  if (!showRealUI)
    return (
      <SimpleGrid minChildWidth="sm" gap={5} padding={3}>
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <GameCardSkeleton key={i} />
          ))}
      </SimpleGrid>
    );

  // all images ready → paint real cards in one go
  return (
    <SimpleGrid minChildWidth="sm" gap={5} padding={3}>
      {dataFlat.map((game, i) => (
        <Fragment key={game.id}>
          <GameCard game={game} />
          {i === dataFlat.length - 1 && <div ref={ref} />}{" "}
          {/* infinite trigger */}
        </Fragment>
      ))}
      {isFetchingNextPage && (
        <Center gridColumn="1 / -1">
          <Spinner />
        </Center>
      )}
    </SimpleGrid>
  );
};
export default GameGrid;
