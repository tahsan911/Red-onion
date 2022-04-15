import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from './components/Routes/Home/Home'
import Login from './components/Routes/Login/Login'
import Signup from './components/Routes/Signup/Signup'
import Footer from './components/Routes/Footer/Footer'
import NotFound from './components/Routes/Not Found/NotFound'
import HeaderNavbar from "./components/Secondary Components/Navbar/HeaderNavbar";


function App() {
  return (
    <div>
      <HeaderNavbar></HeaderNavbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path='/Not Found' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
