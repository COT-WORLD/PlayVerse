import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "./useGames";
import { GameQuery } from "../context/GameContext";

const fetchGamesPage = async (gameQuery: GameQuery, pageParam: number = 1) => {
  const { data } = await apiClient.get<{
    count: number;
    next: string | null;
    results: Game[];
  }>("/games", {
    params: {
      page: pageParam, // RAWG uses ?page=
      // ---- your existing filters ----
      search: gameQuery.searchText,
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
    },
  });
  return data;
};

export const useGamesInfinite = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", "infinite", gameQuery],
    queryFn: ({ pageParam = 1 }) => fetchGamesPage(gameQuery, pageParam),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const url = new URL(lastPage.next);
      return Number(url.searchParams.get("page"));
    },
    initialPageParam: 1, // <-- required by tanstack >= 5
    staleTime: 1000 * 60 * 2,
    retry: 2,
    refetchOnWindowFocus: false,
    enabled: Boolean(gameQuery),
  });
