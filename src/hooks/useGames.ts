import ms from "ms";
import { useInfiniteQuery } from "react-query";
import APIClient, { FetchResponse } from "../services/apiClient";
import useGameQueryStore from "../store";
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

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiCient.getAll({
            params: {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24h') //24h
    })
}

export default useGames;