import Carousel from "react-bootstrap/Carousel";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const loadData = () => {
    let api = "http://localhost:3000/products";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  },[]);

  const res = mydata.map((key) => {
    return (
      <>
        <MDBCard id="card">
          <MDBCardImage src={key.image} position="top" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>{key.name}</MDBCardTitle>
            <p style={{color:'green'}}>Brand : {key.brand}</p>
            <MDBCardText>
              {key.description}
            </MDBCardText>
            <p style={{color:'red'}}>Price : {key.price}</p>
            <MDBBtn href="#">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </>
    );
  });
  return (
    <>
    <br />
    <marquee scrollamout="20"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt repellendus nisi magnam itaque ut corporis dolorum quibusdam quaerat rem placeat, suscipit explicabo minus excepturi error, tempora, aperiam nam quia amet voluptas eveniet dolore! Voluptates</p></marquee>
      <Carousel id="crousel">
        <Carousel.Item interval={1000}>
          <img
            src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src="https://images.unsplash.com/photo-1585314540237-13cb52fe9998?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1585314294157-e84eeda2c59e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div id="product-heading">
        Our Prime Products
      </div>
      <div id="products">
        {res}
        </div>
      <Footer />
    </>
  );
};
export default Home;
