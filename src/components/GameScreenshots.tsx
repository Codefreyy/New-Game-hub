import { Heading, Image, SimpleGrid } from "@chakra-ui/react"
import useScreenshots from "../hooks/useScreenshots"

interface Props {
  gameId: number
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId)

  if (isLoading) return null

  if (error) throw error

  return (
    <>
      <Heading size="lg" marginBottom={2}>
        Game Screenshots
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={2}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameScreenshots
