import { useState } from "react";
import "./App.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";


function Header() {

  return (
    <>
    <div className="header">
      <div className="titlediv">
      <h1 className="title">REvestir</h1>
      </div>
      <div className="divpheader">
      <p>Início</p>
      <p>Coleções</p>
      <p>Masculino</p>
      <p>Feminino</p>
      <p>Acessórios</p>
      </div>
      <div className="iconescadastrocart">
      {/* <input type="text" className="barrapesquisa" placeholder="Pesquise aqui"/> */}
<FiSearch className="lupa"/>
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