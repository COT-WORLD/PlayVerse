import { createContext, useContext, useState } from "react";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

interface GameQueryContextType {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
}

const GameQueryContext = createContext<GameQueryContextType | undefined>(
  undefined
);

export const GameQueryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  return (
    <GameQueryContext.Provider value={{ gameQuery, setGameQuery }}>
      {children}
    </GameQueryContext.Provider>
  );
};

export const useGameQuery = () => {
  const context = useContext(GameQueryContext);
  if (!context) {
    throw new Error("useGameQuery must be used within a GameQueryProvider");
  }
  return context;
};
