import "./App.css";
import Header from './header'
import PageContent from "./pagecontent";
import Login from "./login"
import { Link, Route, Routes, NavLink, BrowserRouter} from 'react-router-dom'

function App(){
  return(
 <div>
  <BrowserRouter>


    <Routes>
      <Route path="/" element={<PageContent/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
 </div>

  );
}

export default App;

