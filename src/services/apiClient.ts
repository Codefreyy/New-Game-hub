import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "b9ec5b5193d3466da3230cd8bcacbc45",
    },
})