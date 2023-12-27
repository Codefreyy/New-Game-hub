import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

const PageHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  return (
    <Heading as="h1" marginY={5} fontSize="4xl">{`${
      gameQuery.platform?.name || "PC"
    } ${gameQuery.genre?.name || "Action"} Games`}</Heading>
  )
}

export default PageHeading
