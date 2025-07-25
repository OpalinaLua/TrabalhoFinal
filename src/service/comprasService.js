import { api } from "./api"

export const criarCompras = async (novaCompra) => {
    const { data } = await api.post("/compras", novaCompra)
    return data
}

export const buscarCompras = async () => {
    const {data} = await api.get("/compras")
    return data
}