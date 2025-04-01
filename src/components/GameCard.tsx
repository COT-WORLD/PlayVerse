import { Game } from "../hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import GamePlatformIconList from "./GamePlatformIconList";
import GameCriticScore from "./GameCriticScore";
import getCroppedImageUrl from "../services/image-modify-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Card.Header>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
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
