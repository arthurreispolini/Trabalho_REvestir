import "./App.css";
import modeloinicial from './assets/fotoinicial.png'
import camisa1 from './assets/camisa1.png'

function PageContent(){

 return(
    <div className="pagecontent">

    <div className="divimageminicial">
        <img src={modeloinicial} alt="foto" className="fotoinicial"/>
        </div>
<hr />
        <div className="areacamisas">

            <div className="card">
                <div>
                <img src ={camisa1} height={300} width={380}/>
                  </div>
                <div className="textodosprodutos">
                <p>Camisa marrom sem estampa</p>
                <p className="preco">Preço: R$99,99</p>
                </div>
            </div>
            
        </div>
        
    </div>
            
 )
}

export default PageContent