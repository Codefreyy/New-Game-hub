import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BsArrowUp } from "react-icons/bs"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import PageHeading from "./components/PageHeading"
import PlatformList from "./components/PlatformList"
import SortSelector from "./components/SortSelector"
import { Platform } from "./hooks/usePlatforms"

export type GameQuery = {
  genreId?: number
  platform?: Platform
  sortOrder: string
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const toggoleVisibility = () => {
      if (window.scrollY > 500) {
        setIsBackToTopVisible(true)
      } else {
        setIsBackToTopVisible(false)
      }
    }

    window.addEventListener("scroll", toggoleVisibility)
    return () => window.removeEventListener("scroll", toggoleVisibility)
  })

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
              selectedGenreId={gameQuery.genreId}
              onSelectedGenre={(genreId) =>
                setGameQuery({ ...gameQuery, genreId })
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
          {isBackToTopVisible && (
            <Box
              onClick={scrollToTop}
              position="fixed"
              bottom="30px"
              right="30px"
              zIndex={3}
            >
              <Button
                size={"sm"}
                rightIcon={<BsArrowUp />}
                variant="outline"
                colorScheme="teal"
              >
                Scroll To Top
              </Button>
            </Box>
          )}
        </GridItem>
      </Grid>
    </>
  )
}

export default App
