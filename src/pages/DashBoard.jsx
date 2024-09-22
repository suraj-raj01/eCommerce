import { message } from "antd";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashBoard = () =>{
    const mynav = useNavigate();
    const [username,setusername] = useState("");
    useEffect(()=>{
        const name = localStorage.getItem("name")
        setusername(name);
    },[])

    const logout = () =>{
        localStorage.clear();
        message.warning("logout successfull!!!")
        mynav("/")
    }
    return(
        <>
            <div id="dashboard">
                <h1>Welcome Mr. " {username} "</h1>
                <Button onClick={logout} variant="outline-primary">LogOut</Button>
            </div>
        </>
    )
}
export default DashBoard;