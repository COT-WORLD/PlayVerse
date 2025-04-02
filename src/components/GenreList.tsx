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

interface Props {
  onSelectGenere: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenere, selectedGenre }: Props) => {
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
                fontSize={genre.id === selectedGenre?.id ? "2xl" : "sm"}
                onClick={() => onSelectGenere(genre)}
                variant={genre.id === selectedGenre?.id ? "underline" : "plain"}
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
