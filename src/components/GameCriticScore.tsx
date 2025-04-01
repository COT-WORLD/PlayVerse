import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const GameCriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default GameCriticScore;
