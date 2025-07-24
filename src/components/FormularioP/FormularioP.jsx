import styles from "./FormularioP.module.css";

export const FormularioP = ({
  produtos,
  onChange,
  onSubmit,
  isChanged,
  isEditing = false,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className={styles.conteiner}>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.nomeP}>
            <label className={styles.titulo}>Nome: </label>
            <input
              className={styles.input}
              type="text"
              name="nome"
              value={produtos.nome}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label className={styles.titulo}>Valor: </label>
            <input
              className={styles.input}
              type="text"
              name="valor"
              value={produtos.valor}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label className={styles.titulo}>Descrição: </label>
            <input
              className={styles.input}
              type="text"
              name="descricao"
              value={produtos.descricao}
              onChange={onChange}
              required
            />
          </div>

          <div className={styles.inputConteiner}>
            <label className={styles.titulo} htmlFor="urlImage">
              URL Imagem:{" "}
            </label>
            <input
              className={styles.input}
              type="text"
              name="urlImagem"
              value={produtos.imagem}
              onChange={onChange}
              required
            />
          </div>

          <button className={styles.botao} type="submit" disabled={!isChanged}>
            {isEditing ? "Salvar alteração" : "Criar Produto"}
          </button>
        </form>
      </div>
    </>
  );
};
