import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Details from "./Components/Details";


const App = () =>{
  
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Layout/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="details/:id" element={<Details/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;