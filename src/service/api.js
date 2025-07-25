import axios from "axios";

export const api = axios.create({
    baseURL: "https://fakeapi-8shd.onrender.com/"
})