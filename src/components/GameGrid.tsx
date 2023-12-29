import { Box, Button, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import { GameQuery } from "../App"
import useGames, { Game } from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

type GameGridProps = {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery)

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          Array.from({ length: 8 }).map((_, i) => {
            return <GameCardSkeleton key={i} />
          })}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <Box key={game.id}>
                <GameCard game={game} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Box textAlign="center">
          <Button onClick={() => fetchNextPage()} marginY={5} variant="outline">
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default GameGrid
