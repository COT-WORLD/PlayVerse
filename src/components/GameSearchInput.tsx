import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useGameQuery } from "../context/GameContext";

const GameSearchInput = () => {
  const { gameQuery, setGameQuery } = useGameQuery();
  const onSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          borderRadius={20}
          ref={ref}
          id="search"
          placeholder="Search games...."
          variant="outline"
        />
      </InputGroup>
    </form>
  );
};
export default GameSearchInput;
