import { GameQuery } from "../App"
import useGames, { Game } from "../hooks/useGames"
import { Box, SimpleGrid } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

type GameGridProps = {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data: games, error, isLoading } = useGames(gameQuery)

  if (isLoading) {
    return (
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {" "}
        {Array.from({ length: 8 }).map((_, i) => {
          return <GameCardSkeleton key={i} />
        })}
      </SimpleGrid>
    )
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {games.map((game: Game, idx) => (
        <Box key={idx}>
          <GameCard game={game} />
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default GameGrid
