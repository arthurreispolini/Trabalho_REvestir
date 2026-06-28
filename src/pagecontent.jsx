import "./App.css";
import Header from "./header"
import modeloinicial from './assets/fotoinicial.png'
import masculino from './assets/categoria-masculino.png'
import feminino from './assets/categoria-feminina.png'
import acessorios from './assets/acessorios.png'
import calcados from './assets/calcados.png'
import destaque1 from "./assets/destaque1.png"
import destaque2 from "./assets/destaque2.png"
import destaque3 from "./assets/destaque3.png"
import destaque4 from "./assets/destaque4.png"
import footer from "./assets/footer.png"

function PageContent(){

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

<div className="card5">
    <div className="card5-div1"></div>
    <div className="card5-div2">
    <p>Camisa marrom <br />com logo</p>
    <span>R$:99,99</span>
    </div>
</div>
<div className="card6">
      <div className="card6-div1"></div>
    <div className="card6-div2">
    <p>Camisa preta <br />sem estampa</p>
    <span>R$:99,99</span>
    </div>
</div>
<div className="card7">
      <div className="card7-div1"></div>
    <div className="card7-div2">
    <p>Camisa marrom <br />sem estampa</p>
    <span>R$:99,99</span>
    </div>
</div>
<div className="card8">
      <div className="card8-div1"></div>
    <div className="card8-div2">
    <p>Camisa branca <br />sem estampa</p>
    <span>R$:99,99</span>
    </div>
</div>

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