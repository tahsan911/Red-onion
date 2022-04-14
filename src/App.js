import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Secondary Components/Navbar/Navbar'
import Home from './components/Routes/Home/Home'
import Login from './components/Routes/Login/Login'
import Signup from './components/Routes/Signup/Signup'
import Footer from './components/Routes/Footer/Footer'
import NotFound from './components/Routes/Not Found/NotFound'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route to="/" element={<Home></Home>}></Route>
        <Route to="/Home" element={<Home></Home>}></Route>
        <Route to="/Signup" element={<Signup></Signup>}></Route>
        <Route to="/Login" element={<Login></Login>}></Route>
        <Route to='/Not Found' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
