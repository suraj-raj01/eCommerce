import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';
import { message } from "antd";

const Registration = () => {
    const navigate = useNavigate();
    const login = () =>{
        navigate("/login");
    }
    const [input,setInput] = useState({});
    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }
    const handleSubmit = () =>{
        let url = "http://localhost:3000/Login";
        axios.post(url,input).then((res)=>{
            console.log(res.data)
            message.success("Registration successfully!!!")
            navigate("/login");
        })
    }
  return (
    <>
      <div id="reg-form">
        <Form>
          <h2>Registration Form</h2>
          <br />
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Full name" name="name"  onChange={handleInput}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Email" name="email" onChange={handleInput}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="number" placeholder="Phone" name="phone" onChange={handleInput}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="password" placeholder="Password" name="password" onChange={handleInput}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Conf-Password" name="conf-password" onChange={handleInput}/>
          </Form.Group>

          <Button variant="outline-primary" onClick={handleSubmit}>
            Registration
          </Button>
          <Button variant="outline-primary" onClick={login}>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Registration;
