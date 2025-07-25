import axios from "axios";

export const comprasApi = axios.create({
    baseURL: "https://fakeapi-8shd.onrender.com/"
})