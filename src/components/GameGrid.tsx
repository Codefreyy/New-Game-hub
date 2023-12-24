import { GameQuery } from "../App"
import useGames from "../hooks/useGames"

type GameGridProps = {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data: games, error, isLoading } = useGames(gameQuery)

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {games.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default GameGrid
