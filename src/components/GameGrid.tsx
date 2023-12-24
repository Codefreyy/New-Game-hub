import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"

type Game = { id: number; name: string }

type FetchGamesResponse = {
  count: number
  results: Game[]
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results)
      })
      .catch((err) => setError(err.message))
  }, [])
  return (
    <div>
      <h1>Games</h1>
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default GameGrid
