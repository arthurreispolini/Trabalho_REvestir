import { useState } from "react";
import "./App.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";


function Header() {

  return (
    <>
    <div className="header">
      <div className="titlediv">
      <h1 className="title">REvestir</h1>
      </div>
      <div className="divpheader">
      <p>início</p>
      <p>Coleções</p>
      <p>masculino</p>
      <p>Feminino</p>
      <p>Acessórios</p>
      </div>
      <div className="iconescadastrocart">
      {/* <input type="text" className="barrapesquisa" placeholder="Pesquise aqui"/> */}
<FiSearch className="lupa"/>
<FaUser  className="iconecadastro"/>
<FaShoppingCart  className="carrinho"/>
      </div>
    </div>
    </>
  );
}
export default Header;