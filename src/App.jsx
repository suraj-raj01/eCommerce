import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";
import Dell from "./pages/Dell";
import Lenovo from "./pages/Lenovo";
import HP from "./pages/Hp";
import Acer from "./pages/Acer";
import Asus from "./pages/Asus";
import Mac from "./pages/Mac";
import Details from "./pages/Details";
import Zebronics from "./pages/Zebronics";
import Login from "./pages/Login";
const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="mycart" element={<MyCart/>}/>
        <Route path="mac" element={<Mac/>}/>
        <Route path="dell" element={<Dell/>}/>
        <Route path="hp" element={<HP/>}/>
        <Route path="lenovo" element={<Lenovo/>}/>
        <Route path="acer" element={<Acer/>}/>
        <Route path="zebronics" element={<Zebronics/>}/>
        <Route path="asus" element={<Asus/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="details/:id" element={<Details/>}/>
        <Route path="login" element={<Login/>}/>
       </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;