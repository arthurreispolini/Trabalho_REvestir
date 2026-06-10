import { useState} from 'react'
import "./App.css";
import cardapio1 from './assets/cardapio (1).png'

function Sidebarfunction() {
    const[ativo,setAtivo] = useState(false)
    const botaosidebar = () => {
        setAtivo(!ativo)
    }

return(
   <>
    <img src={cardapio1} onClick={botaosidebar} className='iconesidebar'/>
    {ativo && (
     <div onClick={botaosidebar} className='sidebardiv'>
      <p>produtos</p>
      <p>roupas</p>
      <p>ONG</p>
     </div>
    )}
   <div/>
   </>
)
}
export default Sidebarfunction;