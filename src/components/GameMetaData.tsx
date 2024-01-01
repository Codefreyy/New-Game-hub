import { SimpleGrid, Text } from "@chakra-ui/react"
import { Game } from "../entities"
import CriticScore from "./CriticScore"
import MetaItem from "./MetaItem"

const GameMetaData = ({ game }: { game: Game }) => {
  return (
    <SimpleGrid columns={{ sm: 2, lg: 4 }} as="dl">
      <MetaItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </MetaItem>
      <MetaItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </MetaItem>
      <MetaItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </MetaItem>
      <MetaItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </MetaItem>
    </SimpleGrid>
  )
}

export default GameMetaData
