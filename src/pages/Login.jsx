import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const Register = () =>{
    navigate("/register")
  }
  return (
    <>
      <div id="form">
        <Form>
          <h2>Login Form</h2>
          <br />
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <p id="forget">forgott password</p>
          <Button variant="outline-primary">
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
