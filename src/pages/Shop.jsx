import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addcartData } from "../addtocartSlice";
const Shop = () => {
 const [mycat, setCatVal] = useState("");
 const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = () => {
    let api = `http://localhost:3000/products/`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

const catHandle = () =>{
    let api = `http://localhost:3000/products/?brand=${mycat}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
}
catHandle();
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
    return (
      <>
        <Card id="card">
          <Card.Img variant="top" src={key.image} onClick={()=>{details(key.id)}}/>
          <Card.Body>
            <Card.Title> {key.name} </Card.Title>
            <h4 style={{ color: "blue", fontSize: "14px" }}>
              {" "}
              Brand : {key.brand} 
               <p style={{fontWeight:'bold',color:'green',padding:'5px 0px 0px 0px'}}> Model : {key.model}</p>
            </h4>
            <Card.Text>{key.description}</Card.Text>
            <h4 style={{ color: "green", fontSize: "16px" }}>
              {" "}
              <p style={{ fontWeight: "bold", color: "#6868b3" }}>
                Price : {key.price}
                {".00 ₹"}
              </p>
            </h4>
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
          </Card.Body>
        </Card>
      </>
    );
  });
  return (
    <>
      <div id="shop">
        {/* filters */}
        <div id="filter-data">
          <h5 style={{fontWeight:'bold',marginTop:'30px',marginBottom:'20px'}}>Search By Brands</h5>
          <div id="radio">
            Dell 
            <input
              type="radio"
              value="Dell"
              name="cat"
              onChange={(e) => {
                setCatVal(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            Apple 
            <input
              type="radio"
              value="Apple"
              name="cat"
              onChange={(e) => {
                setCatVal(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            Acer 
            <input
              type="radio"
              value="Acer"
              name="cat"
              onChange={(e) => {
                setCatVal(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            ASUS 
            <input
              type="radio"
              value="ASUS"
              name="cat"
              onChange={(e) => {
                setCatVal(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            HP 
            <input
              type="radio"
              value="HP"
              name="cat"
              onChange={(e) => {
                setCatVal(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            Lenovo 
            <input
              type="radio"
              value="Lenovo"
              name="cat"
              onChange={(e) => {
                setCatVal(e.target.value);
              }}
            />
          </div>
          <div>
            <Button size="sm" id="filter-btn" variant="outline-primary" onClick={catHandle}>
              Search{" "}
            </Button>
          </div>
          <br />
          <h5 style={{fontWeight:'bold',marginTop:'30px',marginBottom:'20px'}}>Search By Range</h5>
          <div id="range">
            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                <span>0</span>
                <span>0</span>
            </div>
            <input type="range" min='0' max='100000'/>
          </div>
        </div>

        {/* products */}
        <div id="show-data">
          <div id="proHeading">
            <br />
            <h1 style={{ fontWeight: "bold" }}> Our Premium <span style={{color:'green'}}>"{mycat}"</span> Laptops</h1>
          </div>

          <div id="homeProduct">{ans}</div>
        </div>
      </div>
    </>
  );
};
export default Shop;
