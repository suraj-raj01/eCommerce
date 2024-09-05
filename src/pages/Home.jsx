import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

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


  const addDataToCart = (id, name, model, brand, price, desc, image) => {
    dispatch(
      addcartData({
        id: id,
        name: name,
        model: model,
        brand: brand,
        price: price,
        description: desc,
        image: image,
        qnty: 1,
      })
    );
  };
  const navigate = useNavigate();
  const details = (id) => {
    navigate(`/details/${id}`);
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <Card id="card">
          <Card.Img
            variant="top"
            src={key.image}
            onClick={() => {
              details(key.id);
            }}
          />
          <Card.Body>
            <p
              style={{ fontWeight: "bold", fontSize: "18px", color: "#6868b3" }}
            >
              {key.name}
            </p>
            <h4 style={{ color: "blue", fontSize: "14px",fontWeight:'bold' }}>
              {" "}
              Brand : {key.brand} <br />
              <p id="category">Model : {key.model}</p>
            </h4>
            <Card.Text >{key.description}</Card.Text>
            <h4 style={{ color: "red", fontSize: "16px" }}>
              {" "}
              <p style={{ fontWeight: "bold", color: "#6868b3" }}>
                Price : {key.price}
                {".00 ₹"}
              </p>
            </h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="outline-primary"
                onClick={() => {
                  addDataToCart(
                    key.id,
                    key.name,
                    key.model,
                    key.brand,
                    key.price,
                    key.description,
                    key.image
                  );
                }}
              >
                Add To Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "10px 0px",
          width: "98%",
          margin: "0 auto",
          fontWeight: "600",
        }}
      >
        <marquee direction="left" scrollamount="15">
          <span>"Welcome To Laptopshop.com"  Buy Laptops Online | Best Prices, Top Brands
          Premium Laptops | Gaming, Business, & More Discover Your Perfect
          Laptop</span>
        </marquee>
      </div>
      <div style={{ width: "98%", margin: "0 auto" }}>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/surface-laptop-7th-edition-non-color-og-twitter-image?scl=1"
              alt=""
              width="100%"
              height="450px"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg"
              alt=""
              width="100%"
              height="450px"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg"
              alt=""
              width="100%"
              height="450px"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src="https://images-cdn.ubuy.ae/64c41e4771c5f52216163af1-hp-stream-14-laptop-intel-celeron.jpg"
              alt=""
              width="100%"
              height="450px"
            />
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src="https://media.product.which.co.uk/prod/images/ar_2to1_1500x750/22a475e555d7-best-laptop-deals.jpg"
              alt=""
              width="100%"
              height="450px"
            />
            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              src="https://assets2.razerzone.com/images/pnx.assets/7fb8deac5d3c73e360bc687ed62be6cf/gaming-laptops-og-image.webp"
              alt=""
              width="100%"
              height="450px"
            />
            <Carousel.Caption>
              <h3>Sixth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="proHeading">
        <br />
        <h1 style={{ fontWeight: "bold" }}> Our Premium Laptops</h1>
      </div>

      <div id="homeProduct">{ans}</div>

    </>
  );
};

export default Home;
