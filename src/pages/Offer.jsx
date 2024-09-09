import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addcartData} from "../addtocartSlice";

const Offer = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = () => {
    let api = "http://localhost:3000/products/?offer=yes";
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
  const details = (id)=>{
    navigate(`/details/${id}`);
  }

  const ans = mydata.map((key) => {
    let newPrice = ((key.price)-(key.price*key.discount/100)).toFixed(0);
    return (
      <>
        <Card id="card" >
          <Card.Img variant="outline-success" src={key.image} onClick={()=>{details(key.id)}}/>
          <Card.Body>
            <Card.Title> {key.name} </Card.Title>
            <h4 style={{ color: "blue", fontSize: "14px",fontWeight:'bold' }}>
              {" "}
              Brand : {key.brand} <br />
              <p id="category">Model : {key.model}</p>
            </h4>
            <Card.Text>{key.description}</Card.Text>
            <h4 style={{ color: "green", fontSize: "16px" }}>
              {" "}
              <p style={{ fontWeight: "bold", color: "red" ,textDecoration:'line-through'}}>
                Price : {key.price}
                {".00 ₹"}
              </p>
            <span style={{ fontWeight: "bold", color: "green" }}> Discount : {key.discount}{" % off"}</span>
            <p style={{ fontWeight: "bold", color: "#6868b3",marginTop:'5px' }}> New Price : {newPrice}</p>
            </h4>
            <Button
              variant="outline-primary"
              onClick={() => {
                addDataToCart(
                  key.id,
                  key.name,
                  key.model,
                  key.brand,
                  newPrice,
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
        <br />
      <div id="proHeading">
        <h1 style={{fontWeight:'bold'}}> Todays Best Offer<sup style={{padding:'5px',fontStyle:'italic', fontWeight:'normal',backgroundColor:'red',borderRadius:'100%',color:'white'}}>new</sup></h1>
      </div>

      <div id="homeProduct">{ans}</div>
    </>
  );
};

export default Offer;
