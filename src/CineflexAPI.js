import axios from "axios";

const axiosCineflexAPI = axios.create({
    baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/'
});

export {axiosCineflexAPI};