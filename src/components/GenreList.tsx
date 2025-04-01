import { HStack, Image, List, Spinner, Text, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-modify-url";

const GenreList = () => {
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
              <Text>{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
