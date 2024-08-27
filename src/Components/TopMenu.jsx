import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {MDBIcon} from "mdb-react-ui-kit";

const TopMenu = () => {
  return (
    <>
      <Navbar expand="lg" id="navbar">
        <Container style={{backgroundColor:'white', padding:'10px',color:'black'}}>
          <Navbar.Brand href="#" style={{fontWeight:'bold',color:'teal'}}>Laptop-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "350px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Mobile Service</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Laptop Service
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
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
            <div style={{display:'flex', color:'teal',fontSize:'20px'}}>
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
