import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import GamePlatformSelector from "./components/GamePlatformSelector";
import { Platform } from "./hooks/useGames";
import GameSortSelector from "./components/GameSortSelector";
import GameHeading from "./components/GameHeading";
import { QueryClient, QueryClientProvider } from "react-query";
import { GameQueryProvider } from "./context/GameContext";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GameQueryProvider>
          <Grid
            templateAreas={{
              base: `"nav" "main"`,
              md: `"nav nav" "aside main"`,
              lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
              base: ".5fr",
              md: "150px 1fr",
              lg: "200px 1fr",
            }}
          >
            <GridItem area="nav">
              <Navbar />
            </GridItem>
            <Box display={{ base: "none", md: "block", lg: "block" }}>
              <GridItem area="aside" paddingX={5}>
                <GenreList />
              </GridItem>
            </Box>
            <GridItem area="main">
              <Box paddingLeft={3}>
                <GameHeading />
                <HStack marginBottom={2}>
                  <GamePlatformSelector />
                  <GameSortSelector />
                </HStack>
              </Box>
              <GameGrid />
            </GridItem>
          </Grid>
        </GameQueryProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
