import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
    
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const handleLogin = () =>{
      let api = `http://localhost:3000/Login?name=${name}`;
      axios.get(api).then((res)=>{
        if(res.data.length>=1){
          if(res.data[0].password == pass){
            toast.success(`welcome ,${res.data[0].name.toUpperCase()}`);
          }else{
            toast.error("Wrong Password!!");
          }
        }
        else{
          toast.error("Invalid username!!!")
        }
      })
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
      <ToastContainer />
    </>
  );
};
export default Login;
