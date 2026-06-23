import "./App.css";
import Header from './header'
import PageContent from "./pagecontent";
import Login from "./login"
import { Link, Route, Routes, NavLink, BrowserRouter} from 'react-router-dom'

function App(){
  return(
 <div>
  <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={<PageContent/>} />
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/contato" element={<Contato />} /> */}
    </Routes>
    </BrowserRouter>
 </div>

  );
}

export default App;

