import React, { createContext, useContext, useState } from "react";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

interface GameQueryContextProps {
  gameQuery: GameQuery;
  setGameQuery: (newGameQuery: GameQuery) => void;
}

export const GameContext = createContext<GameQueryContextProps | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  return (
    <GameContext.Provider value={{ gameQuery, setGameQuery }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
