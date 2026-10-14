import "./App.css";
import Header from './header'
import PageContent from "./pagecontent";
import Login from "./login"
import CardsProdutos from "./produtos_page.jsx"
import Carrinho from "./carrinho"
import { Link, Route, Routes, NavLink, BrowserRouter} from 'react-router-dom'

function App(){
  return(
 <div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageContent/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/produtos" element={<CardsProdutos/>} />
      <Route path="/carrinho" element={<Carrinho/>} />
    </Routes>
    </BrowserRouter>
 </div>

  );
}

export default App;

