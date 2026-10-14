import { useState } from "react";
import "./header.css"
import "./App.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCarrinho } from "./CarrinhoContext";
import logo from "./assets/logo_revestir.png";


function Header() {
const[input,Setinput] = useState(false)
const { totalItens } = useCarrinho()

  return (
    <>
    <div className="header">
      <div className="titlediv">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo REvestir" className="logo-header" />
        <h1 className="title">REvestir</h1>
      </Link>
     <div className={`pesquisa ${input ? "aberta" : ""}`}>
  <FiSearch
    onClick={() => Setinput(!input)}
    className="lupa"
  />
  <input
    type="text"
    placeholder="Pesquisar"
    className="input_lupa"
  />
</div>
      </div>
      <div className="divpheader">
        <Link to= "/">
      <p>Início</p>
        </Link>
        <Link to= "/produtos">
      <p>Masculino</p>
        </Link>
        <Link to= "/produtos">
      <p>Feminino</p>
        </Link>
      </div>
      <div className="iconescadastrocart">
<Link to="/login">
<FaUser  className="iconecadastro"/>
</Link>
<Link to= "/carrinho" className="carrinho-link">
<FaShoppingCart  className="carrinho" />
{totalItens > 0 && <span className="carrinho-badge">{totalItens}</span>}
</Link>
      </div>
    </div>
    </>
  );
}
export default Header;
