import "./App.css";
import cardapio1 from './assets/cardapio (1).png'
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
      const[ativo,setAtivo] = useState(false)
      const botaosidebar = () => {
          setAtivo(!ativo)
      }
    return(
  <div className="navbar">
    <img src={cardapio1} onMouseEnter={botaosidebar} className='iconesidebar'/>
    {ativo && (
     <div onMouseLeave={botaosidebar} className='sidebardiv'>
      <p>produtos</p>
      <p>roupas</p>
      <p>ONG</p>
      <p>Apagável</p>
     </div>
    )}
   <div/>
  </div>
    );
}
export default Navbar