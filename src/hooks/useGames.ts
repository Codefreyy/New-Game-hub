import { useQuery } from "react-query";
import { GameQuery } from "../App";
import APIClient from "../services/apiClient";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

const apiCient = new APIClient<Game>('/games')

export type Game = {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: Genre[];
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
    return useQuery({
        queryKey: ['games', gameQuery],
        queryFn: () => apiCient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            }
        }),
    })
}

export default useGames;