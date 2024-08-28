import { Outlet } from "react-router-dom";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

const Layout = () =>{
    return(
        <>
        <TopMenu/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
        </>
    )
}
export default Layout;