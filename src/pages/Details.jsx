import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addcartData } from "../addtocartSlice";
import { useParams } from "react-router-dom";

const Details = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  const loadData = () => {
    let api = `http://localhost:3000/products/?id=${id}`;
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

  const ans = mydata.map((key) => {
    return (
      <>
        <div id="details">
          <div id="img">
            <img src={key.image} alt="" width="500px" />
          </div>
          <div id="desc">
            <p style={{ fontSize: "24px" }}>{key.description}</p>
            <h4 style={{ color: "green",fontWeight:'bold' }}>Price : {key.price}{".00₹"}</h4>
            <div style={{fontWeight:'bold'}}>
              Name : {key.name}
              <br />
              Brand Name : {key.brand}
              <br />
              Model Name : {key.name}
              <br />
              Processor : {}
            </div><br />
            <Button
            variant="primary"
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
            >Add To Cart</Button>
          </div>
        </div>
        {/* <Card id="card">
          <Card.Img variant="top" src={key.image} />
          <Card.Body>
            <Card.Title> {key.name} </Card.Title>
            <h4 style={{ color: "blue", fontSize: "14px" }}>
              {" "}
              Brand : {key.brand} 
               <p style={{fontWeight:'bold',color:'red',padding:'5px 0px 0px 0px'}}> model : {key.model}</p>
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
          </Card.Body>
        </Card> */}
      </>
    );
  });

  return (
    <>

      <div id="homeProduct">{ans}</div>
    </>
  );
};

export default Details;
