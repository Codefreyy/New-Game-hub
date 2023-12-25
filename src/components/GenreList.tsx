import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/getCroppedImageUrl"

const GenreList = () => {
  const { data: genres, isLoading } = useGenres()
  if (isLoading)
    return (
      <>
        <Skeleton height="750px">
          <SkeletonText></SkeletonText>
        </Skeleton>
      </>
    )
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => {
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
                >
                  {" "}
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
