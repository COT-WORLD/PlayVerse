import { useEffect, useState } from "react";
import { useGamesInfinite } from "./useGamesInfinite";
import { Game } from "./useGames";
import getCroppedImageUrl from "../services/image-modify-url";
import { preloadImage } from "../utils/preLoadImage";
import { GameQuery } from "../context/GameContext";

export const useGamesInfiniteDeferred = (gameQuery: GameQuery) => {
  const infinite = useGamesInfinite(gameQuery);
  const [readyGames, setReadyGames] = useState<Game[]>([]);
  const [show, setShow] = useState(false);

  // whenever new pages arrive, pre-load their images
  useEffect(() => {
    if (!infinite.data) return;

    const flat = infinite.data.pages.flatMap((p) => p.results);
    if (flat.length === 0) return;

    (async () => {
      // 1. create promises for every *new* image
      const tasks = flat.map((g) =>
        preloadImage(getCroppedImageUrl(g.background_image))
      );
      // 2. wait for all of them
      await Promise.all(tasks);
      // 3. now safe to paint
      setReadyGames(flat);
      setShow(true);
    })();
  }, [infinite.data]);

  return {
    ...infinite, // keep scroll logic
    dataFlat: readyGames, // use this array in UI
    showRealUI: show, // boolean flag
  };
};
