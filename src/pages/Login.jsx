import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { message } from "antd";

const Login = () => {
  const navigate = useNavigate();
    
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const handleLogin = () =>{
      if(name==""){
        message.warning("Please enter your username")
        return false;
      }
      if(pass==""){
        message.warning("Please enter your password")
      }
      else{
      let api = `http://localhost:3000/Login?name=${name}`;
      axios.get(api).then((res)=>{
        if(res.data.length>=1){
          if(res.data[0].password == pass){
            localStorage.setItem("name",res.data[0].name.toUpperCase())
            message.success(`WELCOME , "${res.data[0].name.toUpperCase()}"`);
            navigate(`/dashboard/${res.data[0].name}`);
          }else{
            message.error("Wrong Password!!");
          }
        }
        else{
          message.error("Invalid username!!!")
        }
      })
    }
    }

  const Register = () =>{
    navigate(`/register`);
  }

  return (
    <>
      <div id="form">
        <Form>
          <h2>Login Form</h2>
          <br />
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Username" value={name} onChange={(e) => { setName(e.target.value) }}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Password" value={pass} onChange={(e) => { setPass(e.target.value) }}/>
          </Form.Group>
          <p id="forget">forgott password</p>
          <Button variant="outline-primary" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="outline-primary"  onClick={Register}>
            Register
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Login;
