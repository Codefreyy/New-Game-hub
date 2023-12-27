import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/getCroppedImageUrl"

type GenreListProps = {
  onSelectedGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ onSelectedGenre, selectedGenre }: GenreListProps) => {
  const { data: genres, isLoading } = useGenres()
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    )
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre, idx) => {
          return (
            <ListItem paddingY="5px" paddingLeft="5px" key={genre.id}>
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  fontWeight="normal"
                  variant="link"
                  fontSize="lg"
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => {
                    onSelectedGenre(genre)
                  }}
                  style={{
                    fontWeight:
                      (selectedGenre == null && idx == 0) ||
                      genre.id == selectedGenre?.id
                        ? "bold"
                        : "normal",
                    textDecoration:
                      (selectedGenre == null && idx == 0) ||
                      genre.id == selectedGenre?.id
                        ? "underline"
                        : "none",
                  }}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default GenreList
