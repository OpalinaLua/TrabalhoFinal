import { comprasApi } from "./comprasAPi"

export const criarCompras = async (novaCompra) => {
    const { data } = await comprasApi.post("/compras", novaCompra)
    return data
}