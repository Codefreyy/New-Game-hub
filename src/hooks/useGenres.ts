import genres from "../data/genres";
import { useQuery } from "react-query";
import ms from 'ms'
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Genre>('/genres')

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: genres
    })

}

export default useGenres;