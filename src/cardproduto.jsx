import "./cardproduto.css"
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import destaque2 from "./assets/destaques/destaque2.png"

function Cardproduto({ nome, preco, imagem }) {

  const [favorito, setFavorito] = useState(false);

  return (

    <div className="card-destaque">

      <div className="card-destaque-div1">
        <img src={destaque2}/>
        <p onClick={() => setFavorito(!favorito)}>
          {favorito ? <FaHeart className="coracao" /> : <FaRegHeart />}
        </p>
      </div>

      <div className="card-destaque-div2">
        <p className="nome-card-produto">{nome}</p>
        <p className="preco-card-produto">R$ {preco}</p>
        <button>Comprar</button>
      </div>

    </div>
  );
}

export default Cardproduto