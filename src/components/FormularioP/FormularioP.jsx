export const FormularioP = ({
  produtos,
  onChange,
  onSubmit,
  isChanged,
  isEditing = false,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        nome:
        <input
          type="text"
          name="nome"
          value={produtos.nome}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Valor:
        <textarea name="valor" value={produtos.valor} onChange={onChange} />
      </label>
      <label>
        Descrição:
        <textarea
          name="descricao"
          value={produtos.descricao}
          onChange={onChange}
        />
      </label>
      <button type="submit" disabled={!isChanged}>
        {isEditing ? "Salvar alteração" : "Criar Produto"}
      </button>
    </form>
  );
};
