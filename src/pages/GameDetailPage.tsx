import { Heading, Spinner, Text } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { ExpandableText } from "../components/ExpandableText"
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
      <Text>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Text>
    </>
  )
}

export default GameDetailPage
