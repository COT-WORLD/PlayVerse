import {
  Button,
  HStack,
  Image,
  List,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-modify-url";

interface Props {
  onSelectGenere: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenere }: Props) => {
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
      {error && <Text>{error}</Text>}
      <List.Root gap={3} variant="plain" align="center">
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                colorPalette="teal"
                variant="ghost"
                onClick={() => onSelectGenere(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
