import { api } from "./api"

export const buscarProdutos = async () => {
    const {data} = await api.get("/produtos")
    return data
}
export const criarProdutos = async (novoProduto) => {
    const {data} = await api.post(`/produtos`, novoProduto)
    return data
}
export const editarProdutos = async (id, produtoAtualizado) => {
    const {data} = await api.put(`/produtos/${id}`,produtoAtualizado)
    return data
}
export const deletarProdutos = async (id) => {
    await api.delete(`/produtos/${id}`)
}
