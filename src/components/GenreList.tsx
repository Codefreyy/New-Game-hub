import useGenres from "../hooks/useGenres"

const GenreList = () => {
  const { data } = useGenres()
  return <div>{JSON.stringify(data)}</div>
}

export default GenreList
