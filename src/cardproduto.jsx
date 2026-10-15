import "./cardproduto.css"
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCarrinho } from "./CarrinhoContext";
import { useFavoritos } from "./FavoritosContext";

function Cardproduto({ id, nome, preco, imagem }) {

  const [adicionado, setAdicionado] = useState(false);
  const { adicionar } = useCarrinho();
  const { alternar, ehFavorito } = useFavoritos();

  const favorito = ehFavorito(id);

  function handleComprar() {
    adicionar({ id, nome, preco, imagem });

    // feedback visual rápido no botão
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 1500);
  }

  return (

    <div className="card-destaque">

      <div className="card-destaque-div1">
        <img src={imagem} alt={nome}/>
        <p onClick={() => alternar({ id, nome, preco, imagem })}>
          {favorito ? <FaHeart className="coracao" /> : <FaRegHeart />}
        </p>
      </div>

      <div className="card-destaque-div2">
        <p className="nome-card-produto">{nome}</p>
        <p className="preco-card-produto">R$ {preco}</p>
        <button onClick={handleComprar}>
          {adicionado ? "Adicionado ✓" : "Comprar"}
        </button>
      </div>

    </div>
  );
}

export default Cardproduto
