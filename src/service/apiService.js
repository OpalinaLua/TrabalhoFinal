import { api } from "./api"

export const getProduct = async () => {
    const {data} = await api.get("/produtos")
    return data
}