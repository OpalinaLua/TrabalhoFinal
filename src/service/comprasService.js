import { api } from "./api"

export const criarCompras = async (novaCompra) => {
    const { data } = await api.post("/compras", novaCompra)
    return data
}
