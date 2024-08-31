import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TopMenu = () => {
  const MyData = useSelector((state) => state.addCart.cart);
  console.log(MyData);
  const DataCount = MyData.length;
  const navigate = useNavigate();

  const myCart = () => {
    navigate("/mycart");
  };

  return (
    <>
        <Navbar collapseOnSelect expand="lg" id="topmenu">
          <Container>
            <Navbar.Brand href="#home" style={{fontSize:'30px',fontWeight:'bold'}}>Laptop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link as={Link} to="home">
                  Home
                </Nav.Link>
                <Nav.Link to="home">Searvices</Nav.Link>
                <Nav.Link to="home">Products</Nav.Link>
                <Nav.Link to="home">Watches</Nav.Link>
                <Nav.Link to="home">Sale</Nav.Link>
                <Nav.Link to="home">Blog</Nav.Link>
                <NavDropdown title="Category" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="lowprice">
                    {" "}
                    Low-Price
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Medium-Price
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    High-Price
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <div style={{display:'flex',gap:'10px'}}>
                <Nav.Link href="#deets">
                  <IoSearch />
                </Nav.Link>
                <Nav.Link href="#deets">
                  <FaUser />
                </Nav.Link>
                <Nav.Link href="#memes">
                  <a href="#" onClick={myCart} style={{textDecoration:'none', color:'black'}}>
                    <FaShoppingCart />
                    <sup style={{fontWeight:'bold',backgroundColor:'skyblue',borderRadius:'50px',padding:'2px 6px'}}>
                        {DataCount}
                  </sup>
                  </a>
                </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
};

export default TopMenu;
