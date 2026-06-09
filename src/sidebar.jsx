import { useState} from 'react'
import "./App.css";
import { FaBars } from "react-icons/fa";

function Sidebarfunction() {
    const[ativo,setAtivo] = useState(false)
    const botaosidebar = () => {
        setAtivo(!ativo)
    }

return(
   <>
    <FaBars onClick={botaosidebar}/>
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