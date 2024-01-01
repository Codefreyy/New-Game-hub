import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { ExpandableText } from "../components/ExpandableText"
import GameMetaData from "../components/GameMetaData"
import GameScreenshots from "../components/GameScreenshots"
import GameTrailer from "../components/GameTrailer"
import useGame from "../hooks/useGame"

const GameDetailPage = () => {
  const { id } = useParams()
  console.log(useParams())
  const { data: game, isLoading, error } = useGame(Number(id)!)

  if (isLoading) return <Spinner />
  if (error || !game) throw error
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} paddingX={20}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameMetaData game={game} />
          <GameTrailer gameId={game.id} />
        </GridItem>
        <GridItem>
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  )
}

export default GameDetailPage
