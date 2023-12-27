import { Flex, Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import PageHeading from "./components/PageHeading"
import PlatformList from "./components/PlatformList"
import SortSelector from "./components/SortSelector"
import { Genre, Platform } from "./hooks/useGames"

export type GameQuery = {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Flex flexDirection="column" marginLeft={3}>
            <PageHeading gameQuery={gameQuery} />
            <HStack gap={4} marginBottom={2}>
              <PlatformList
                onSelectedPlatform={(platform: Platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              />
              <SortSelector
                selectedSortOrder={gameQuery.sortOrder}
                setSelectedSortOrder={(order: string) =>
                  setGameQuery({ ...gameQuery, sortOrder: order })
                }
              />
            </HStack>
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
