import "./pagecontent.css"
import Header from "./header"
import Cardproduto from "./cardproduto";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import modeloinicial from './assets/pagecontent/fotoinicial.png'
import masculino from './assets/categorias/categoria-masculino.png'
import feminino from './assets/categorias/categoria-feminina.png'
import acessorios from './assets/categorias/acessorios.png'
import calcados from './assets/categorias/calcados.png'
import destaque1 from "./assets/destaques/destaque1.jpg"
import destaque2 from "./assets/destaques/destaque2.png"
import destaque3 from "./assets/destaques/destaque3.png"
import destaque4 from "./assets/destaques/destaque4.png"
import footer from "./assets/pagecontent/footer.png"
import gmail from "./assets/pagecontent/gmail.svg"
import location from "./assets/pagecontent/location.svg"
import zap from "./assets/pagecontent/zap.svg"
import tiktok from "./assets/pagecontent/icons8-tiktok.svg"


function PageContent(){

const destaques = [
    {
        id:1,
        nome: "Camisa oversized branca",
        preco: 159.99,
        imagem: destaque1
    },
      {
        id:2,
        nome: "Camisa oversized cinza escura",
        preco: 159.99,
        imagem: destaque2
    },
      {
        id:3,
        nome: "Camisa oversized marrom escura",
        preco: 159.99,
        imagem: destaque3
    },
      {
        id:4,
        nome: "Camisa oversized beje",
        preco: 159.99,
        imagem: destaque4
    }
]

 return(

    <div className="pagecontent">
<Header/>
    <div className="divimageminicial">
        <h1>Somos a Única <br /> com estilo para você.</h1>
        <p>Roupas que combinam com sua essência.</p>
    </div>
<div className="categorias">
    <div className="linha"></div>
<p>Categorias</p>
<div className="linha"></div>

</div>

<div className="cards-categoria">

<div className="card1"></div>
<div className="card2"></div>
<div className="card3"></div>
<div className="card4"></div>

</div>

<div className="destaques">

 <div className="linha2"></div>
 <p>Destaques</p>
 <div className="linha2"></div>
</div>


      <div className="cards-destaques">

        {destaques.map((destaque) =>(
 <Cardproduto
     key={destaque.id}
    nome={destaque.nome}
    preco={destaque.preco}
    imagem={destaque.imagem}
 />
        ))}
</div>

       <div className="footerdiv">
<div className="footer-navegacao">
<h1>Navegação</h1>
<p>Início</p>
<p>Coleções</p>
<p>Masculino</p>
<p>Feminino</p>
</div>
<div className="footer-contato">
    <h1>Contato</h1>
    
    <p> <img src={gmail} className="gmail" /> REvestir@gmail.com</p>
    
    <p> <img src={zap}  className="zap"/> (35) 9960-0196</p>
    
    <p> <img src={location} className="location" /> Niterói - Rio de janeiro</p>
</div>
<div className="footer-informações">
   <h1>Informações</h1>
   <p>Frete para todo o país</p>
   <p>Doações e cashback</p>
   <p>Política de privacidade</p>
   <p>Perguntas frequentes</p>
</div>
<div className="redes-sociais-footer">
    <FaInstagram className="instagram"/> 
    <p className="redes-sociais-footer-p">instagram</p>
    <img src={tiktok} className="tiktok" />
    <p className="redes-sociais-footer-p">  tiktok</p>
    <FaXTwitter className="x" />
    <p className="redes-sociais-footer-p">Twitter (X)</p>
</div>
       </div>

</div>   )}

export default PageContent