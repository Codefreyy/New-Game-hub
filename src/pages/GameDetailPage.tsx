import { Heading, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { ExpandableText } from "../components/ExpandableText"
import GameMetaData from "../components/GameMetaData"
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
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameMetaData game={game} />
      <GameTrailer gameId={game.id} />
    </>
  )
}

export default GameDetailPage
