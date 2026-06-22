import "./App.css";
import modeloinicial from './assets/fotoinicial.png'
import masculino from './assets/categoria-masculino.png'
import feminino from './assets/categoria-feminina.png'
import acessorios from './assets/acessorios.png'
import calcados from './assets/calcados.png'

function PageContent(){

 return(
    <div className="pagecontent">

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
       
    </div>
            
 )
}

export default PageContent