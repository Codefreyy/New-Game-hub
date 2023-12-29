import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenre from "../hooks/useGenre"

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const genre = useGenre(gameQuery.genreId)
  return (
    <Heading as="h1" marginY={5} fontSize="4xl">{`${
      gameQuery.platform?.name || "PC"
    } ${genre?.name || "Action"} Games`}</Heading>
  )
}

export default GameHeading
