import { Game } from "../hooks/useGames";
import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import GamePlatformIconList from "./GamePlatformIconList";
import GameCriticScore from "./GameCriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width="320px">
      <Card.Header>
        <Image src={game.background_image}></Image>
      </Card.Header>
      <Card.Body>
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <GamePlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameCriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
