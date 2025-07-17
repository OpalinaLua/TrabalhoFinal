import { useEffect } from "react";
import { useParams } from "react-router";
import { editarProdutos } from "../../service/apiService";

export const edicao = () => {
  const { id } = useParams();
  const [produto, setProdutos] = useState({});
  const [produtoInicial, setProdutoinicial] = useState(null);
  const [loading, setLoading] = useState(true);
  const navegacao = useNavigate();
  const getData = async () => {
    try {
      const produtos = await setTarefa(produtos);
      setInitialTarefa(produtos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handleChange = (e) => {
    setProdutos({ ...produto, [e.target.nome]: e.target.valor });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editarProdutos(produto);
    navegacao("/");
  };
  const handleDelete = async () =>{
    const confirm = window.confirm(
        "Tem certeza que deseja apagar?"
    )
    if(confirm)
  }





};
