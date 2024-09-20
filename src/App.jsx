import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import About from "./pages/About";
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
import ProductSearch from "./pages/ProductSearch";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Offer from "./pages/Offer";
import Registration from "./pages/Registration";
import CheckOut from "./pages/CheckOut";
import DashBoard from "./pages/DashBoard";
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
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="offer" element={<Offer/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="details/:id" element={<Details/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Registration/>}/>
        <Route path="productsearch/:txtdata" element={<ProductSearch/>}/>
        <Route path="checkout" element={<CheckOut/>}/>
        <Route path="dashboard/:userName" element={<DashBoard/>}/>
       </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;