import "./App.css";
import PageContent from "./pagecontent";
import Login from "./login"
import CardsProdutos from "./produtos_page.jsx"
import Carrinho from "./carrinho"
import Favoritos from "./favoritos"
import { CarrinhoProvider } from "./CarrinhoContext"
import { FavoritosProvider } from "./FavoritosContext"
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App(){
  return(
 <div>
  <BrowserRouter>
    <CarrinhoProvider>
      <FavoritosProvider>
        <Routes>
          <Route path="/" element={<PageContent/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/produtos" element={<CardsProdutos/>} />
          <Route path="/carrinho" element={<Carrinho/>} />
          <Route path="/favoritos" element={<Favoritos/>} />
        </Routes>
      </FavoritosProvider>
    </CarrinhoProvider>
    </BrowserRouter>
 </div>

  );
}

export default App;
