import "./pagecontent.css"
import Header from "./header"
import Cardproduto from "./cardproduto";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
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
<div className="footer-nav">
<h1>Navegação</h1>
      <p>Início</p>
      <p>Coleções</p>
      <p>Masculino</p>
      <p>Feminino</p>
      <p>Acessórios</p>
</div>

<div className="contato-footer">
    <h1>Contato</h1>
<p>REvestir@gmail.com</p>
<p>(35) 99960-0196</p>
<p>Niterói - Rio de Janeiro</p>
</div>

<div className="informacoes-footer">
<h1>Informações</h1>
<p>Frete para todo o Brasil</p>
<p>Trocas e devoluções</p>
<p>Política de privacidade</p>
<p>Termos de uso</p>
<p>Perguntas Frequentes</p>
</div>

<div className="social-footer">
<h1>Redes Sociais</h1>
<p>Instagram</p>
<p>TikTok</p>
<p>Facebook</p>
</div>
       </div>
    </div>
            
 )
}

export default PageContent