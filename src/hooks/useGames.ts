import { GameQuery } from "../App";
import useData from "./useData";

export type Game = {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: Genre[];
    rating_top: number;
}

export type Platform = {
    id: number;
    name: string;
    slug: string;
}
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGames = (gameQuery: GameQuery) => {
    console.log(gameQuery, 1)
    return useData<Game>(
        "/games",
        {
            params: {
                genres: gameQuery?.genre?.id,
                parent_platforms: gameQuery?.platform?.id,
                ordering: gameQuery?.sortOrder,
                search: gameQuery?.searchText,
            }
        },
        [gameQuery]
    )
}

export default useGames;