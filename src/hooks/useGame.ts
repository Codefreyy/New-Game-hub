import { useQuery } from "react-query";
import APIClient from "../services/apiClient";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>('/games');

const useGame = (id: number) => useQuery({
    queryKey: ['games', id],
    queryFn: () => apiClient.get(id)
});

export default useGame;