import "./App.css";
import PageContent from "./pagecontent.jsx";
import Login from "./login.jsx"
import CardsProdutos from "./produtos_page.jsx"
import Carrinho from "./carrinho.jsx"
import { CarrinhoProvider } from "./CarrinhoContext.jsx"
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App(){
  return(
 <div>
  <BrowserRouter>
    <CarrinhoProvider>
      <Routes>
        <Route path="/" element={<PageContent/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/produtos" element={<CardsProdutos/>} />
        <Route path="/carrinho" element={<Carrinho/>} />
      </Routes>
    </CarrinhoProvider>
    </BrowserRouter>
 </div>

  );
}

export default App;
