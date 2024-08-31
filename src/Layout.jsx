import { Outlet } from "react-router-dom";

import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";

const Layout=()=>{
    return(
        <>
           <TopMenu/>

           <Outlet/>

           <Footer/>

        </>
    )
}

export default Layout;