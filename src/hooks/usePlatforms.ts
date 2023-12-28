import ms from "ms";
import { useQuery } from "react-query";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";

export type Platform = {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: platforms
    })

}

export default usePlatforms;