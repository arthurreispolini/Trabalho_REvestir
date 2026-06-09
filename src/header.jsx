import { useState } from "react";
import "./App.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Header() {

  return (
    <div className="header">

      <h1 className="title">Revestir</h1>
      <input type="text" className="barrapesquisa" placeholder="Pesquise aqui"/>
      <div className="iconescadastrocart">
<FaUser  className="iconecadastro"/>
<FaShoppingCart  className="carrinho"/>
      </div>
    </div>
  );
}
export default Header;