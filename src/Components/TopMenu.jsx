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
import { useState } from "react";

const TopMenu = () => {
  const [searchData,setSearchData] = useState("")
  const MyData = useSelector((state) => state.addCart.cart);
  console.log(MyData);
  const DataCount = MyData.length;
  const navigate = useNavigate();

  const myCart = () => {
    navigate("/mycart");
  };
  const login = () => {
    navigate("/login");
  };
  const handleSearch = () =>{
    navigate(`/productsearch/${searchData}`)
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="topmenu">
        <Container>
          <Navbar.Brand
            as={Link}
            to="home"
            style={{ fontSize: "30px", fontWeight: "bold", color: "#6868b3" }}
          >
            Laptop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="products">
                Products
              </Nav.Link>

              <NavDropdown title="Brands" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="dell">
                  DELL
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="mac">
                  MAC
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="lenovo">
                  LENOVO
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="hp">
                  HP
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="acer">
                  ACER
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="asus">
                  ASUS
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="zebronics">
                  ZEBRONICS
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <div style={{ display: "flex", gap: "5px" }}>
              <Nav.Link
                  
                  style={{ textDecoration: "none", color: "#6868b3" }}
                >
                  <input id="input" placeholder="Search..." type="text" value={searchData} onChange={(e)=>{setSearchData(e.target.value)}}/>
                <button id="srchbtn" onClick={handleSearch}> search </button>
                </Nav.Link>
                <Nav.Link
                  style={{ textDecoration: "none", color: "#6868b3" }}
                  onClick={login}
                >
                  <FaUser />
                </Nav.Link>
                <Nav.Link>
                  <a
                    href="#"
                    onClick={myCart}
                    style={{ textDecoration: "none", color: "#6868b3" }}
                  >
                    <FaShoppingCart />
                    <sup
                      style={{
                        fontWeight: "bold",
                        fontSize: "10px",
                        marginLeft: "3px",
                        backgroundColor: "#6868b3",
                        color: "white",
                        borderRadius: "50px",
                        padding: "2px 5px",
                      }}
                    >
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
