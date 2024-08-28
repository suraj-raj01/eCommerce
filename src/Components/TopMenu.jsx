import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {MDBIcon} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const TopMenu = () => {
  return (
    <>
      <Navbar expand="lg" id="navbar">
        <Container style={{backgroundColor:'white', padding:'10px',color:'black'}}>
          <Navbar.Brand href="home" style={{fontWeight:'bold',color:'teal'}}>Laptop-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "350px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <Nav.Link as={Link} to="contact">Contact</Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="srvice1">Mobile Service</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="srvice2">
                  Laptop Service
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="srvice3">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
           
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div style={{display:'flex',fontSize:'18px'}}>
            <Nav.Link href="#">
            <MDBIcon fas icon="user-plus" />
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#">
            <MDBIcon fas icon="cart-plus" />
              </Nav.Link>
              &nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#">
            <MDBIcon fab icon="github" />
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default TopMenu;
