import { Outlet } from "react-router-dom";

import TopMenu from "./Components/TopMenu";
import Footer from "./Components/Footer";

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