import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-modify-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <List.Root gap={3} variant="plain" align="center">
      {data.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
