import { useInfiniteQuery } from "react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/apiClient";
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
    return useInfiniteQuery<FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiCient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    })
}

export default useGames;