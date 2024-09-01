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
            <Navbar.Brand as={Link} to="home" style={{fontSize:'30px',fontWeight:'bold',color:'teal'}}>Laptop</Navbar.Brand>
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
                  <NavDropdown.Item as={Link} to="lowprice">
                    Low-Price
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="mediumprice">
                    Medium-Price
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="highprice">
                    High-Price
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <div style={{display:'flex',gap:'5px'}}>
                <Nav.Link as={Link} to="#" style={{textDecoration:'none', color:'teal'}}>
                  <IoSearch />
                </Nav.Link>
                <Nav.Link as={Link} to="#" style={{textDecoration:'none', color:'teal'}}>
                  <FaUser />
                </Nav.Link>
                <Nav.Link>
                  <a href="#" onClick={myCart} style={{textDecoration:'none', color:'teal'}}>
                    <FaShoppingCart />
                    <sup style={{fontWeight:'bold',fontSize:'10px', marginLeft:'3px',backgroundColor:'teal',color:'white', borderRadius:'50px',padding:'2px 5px'}}>
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
