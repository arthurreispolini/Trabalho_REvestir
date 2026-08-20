import { useState } from "react";
import "./header.css"
import "./App.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";


function Header() {
const[input,Setinput] = useState(false)

  return (
    <>
    <div className="header">
      <div className="titlediv">
      <h1 className="title">REvestir</h1>
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
      <p>Início</p>
      <p>Masculino</p>
      <p>Feminino</p>
      </div>
      <div className="iconescadastrocart">
<Link to="/login">
<FaUser  className="iconecadastro"/>
</Link>
<FaShoppingCart  className="carrinho"/>
      </div>
    </div>
    </>
  );
}
export default Header;