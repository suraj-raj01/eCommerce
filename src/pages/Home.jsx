import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

import { useDispatch } from "react-redux";
import { addcartData } from "../addtocartSlice";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = () => {
    let api = "http://localhost:3000/products";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const addDataToCart = (id, name, cate, brand, price, desc, image) => {
    dispatch(
      addcartData({
        id: id,
        name: name,
        categories: cate,
        brand: brand,
        price: price,
        description: desc,
        image: image,
        qnty: 1,
      })
    );
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <Card id="card">
          <Card.Img variant="top" src={key.image} />
          <Card.Body>
            <Card.Title> {key.name} </Card.Title>
            <h4 style={{ color: "blue", fontSize: "14px" }}>
              {" "}
              Brand : {key.brand} <br />
              <p id="category">Categories : {key.categories}</p>
            </h4>
            <Card.Text>{key.description}</Card.Text>
            <h4 style={{ color: "red", fontSize: "16px" }}>
              {" "}
              Price : {key.price}{" "}
            </h4>
            <Button
              variant="primary"
              onClick={() => {
                addDataToCart(
                  key.id,
                  key.name,
                  key.categories,
                  key.brand,
                  key.price,
                  key.description,
                  key.image
                );
              }}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
    <div style={{display:'flex',padding:'10px'}}>
    <marquee behavior="smooth" direction="left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime vel laboriosam nam hic consequatur accusantium cupiditate error cumque aperiam soluta?</marquee>
    </div>
      <Carousel>
        <Carousel.Item>
          <img src="https://m.media-amazon.com/images/I/51hJIsWMagL._AC_UF1000,1000_QL80_.jpg" alt=""width='100%' height='400px' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg" alt="" width='100%' height='400px' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src="https://hiraoka.com.pe/media/mageplaza/blog/post/m/a/macbook_air_vs._macbook_pro-_cuales_son_sus_diferencias.jpg" alt="" width='100%' height='400px' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id="proHeading">
        <br />
        <h1> Our Premium Laptops</h1>
      </div>

      <div id="homeProduct">{ans}</div>
    </>
  );
};

export default Home;
