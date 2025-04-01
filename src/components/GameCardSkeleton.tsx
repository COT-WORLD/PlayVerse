import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card.Root width="320px">
      <Card.Header>
        <Skeleton height="250px" />
      </Card.Header>
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
