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
        titulo:
        <input
          type="text"
          name="titulo"
          value={produtos.titulo}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Valor:
        <textarea name="Valor" value={produtos.valor} onChange={onChange} />
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
