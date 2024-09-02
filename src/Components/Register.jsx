import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Register = () => {
    const navigate = useNavigate();
    const login = () =>{
        navigate("/login");
    }
    const [input,setInput] = useState({});
    const handleInput=(e)=>{
        let value = e.target.value;
        let name = e.target.name;
        setInput(values=>({...values,[name]:value}))
    }
  return (
    <>
      <div id="reg-form">
        <Form>
          <h2>Register Form</h2>
          <br />
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Full name" value={input} onChange={()=>(handleInput)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Email" value={input} onChange={()=>(handleInput)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="number" placeholder="Phone" value={input} onChange={()=>(handleInput)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="password" placeholder="Password" value={input} onChange={()=>(handleInput)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Conf-Password" value={input} onChange={()=>(handleInput)}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={HandleSubmit}>
            Register
          </Button>
          <Button variant="primary" type="submit" onClick={login}>
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Register;
