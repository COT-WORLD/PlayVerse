import {
  Heading,
  HStack,
  Image,
  Link,
  List,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-modify-url";
import { useGameQuery } from "../context/GameContext";

const GenreList = () => {
  const { gameQuery, setGameQuery } = useGameQuery();

  const handleSelectedGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };
  const { data, error, isLoading } = useGenres();
  if (isLoading)
    return (
      <VStack colorPalette="teal">
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>
    );
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      {error && <Text>{error}</Text>}
      <List.Root gap={3} variant="plain" align="center">
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                fontSize={genre.id === gameQuery.genre?.id ? "2xl" : "sm"}
                onClick={() => handleSelectedGenre(genre)}
                variant={
                  genre.id === gameQuery.genre?.id ? "underline" : "plain"
                }
                colorPalette="teal"
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
