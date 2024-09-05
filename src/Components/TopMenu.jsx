import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
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

  const offers = () =>{
    navigate("/offer")
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="topmenu">
        <Container>
          <Navbar.Brand
            as={Link}
            to="home"
            style={{ fontSize: "20px", fontWeight: "bold", color: "#6868b3" }}
          >
            LAPTOPSHOP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '500px',backgroundColor:'white',padding:'10px' }}
            navbarScroll
            >
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="shop">
                Shop
              </Nav.Link>

              <NavDropdown title="Brands" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="dell">
                  DELL
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="mac">
                  APPLE
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
              <Nav.Link as={Link} to="offer">
                Offer
              </Nav.Link>
              <Nav.Link as={Link} to="services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              <div style={{ display: "flex", gap: "5px",backgroundColor:'white',padding:'10px' }}>
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
      {/* // position fixed Item */}
        <div id="offers">
          <span onClick={offers}>offers</span>
        </div>
    </>
  );
};

export default TopMenu;
