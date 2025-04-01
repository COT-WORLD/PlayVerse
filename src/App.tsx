import { Button, ButtonGroup, HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div className="card">
        <HStack>
          <Button colorPalette="teal" variant="solid">
            Click me
          </Button>
          <Button colorPalette="teal" variant="solid">
            Click me
          </Button>
        </HStack>
      </div>
    </>
  );
}

export default App;
