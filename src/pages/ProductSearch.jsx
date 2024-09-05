import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addcartData } from "../addtocartSlice";
import { useNavigate, useParams } from "react-router-dom";

const ProductSearch = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const { txtdata } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    setIsLoading(true);
  }, [txtdata]);

  const loadData = () => {
    let api = `http://localhost:3000/products/`;
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
    const status = key.name.includes(txtdata);
    if (status) {
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
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}>
                {" "}
                Brand : {key.brand}
                <p
                  style={{
                    fontWeight: "bold",
                    color: "green",
                    padding: "5px 0px 0px 0px",
                  }}
                >
                  {" "}
                  Model : {key.model}
                </p>
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
          </Card>
        </>
      );
    }
  });

  return (
    <>
      <div id="proHeading">
        <br />
        <h1 style={{ fontWeight: "bold" }}> Product Search Laptops</h1>
      </div>
      {isLoading ? (
        <center>
          <img
            src="https://www.tothenew.com/blog/wp-ttn-blog/uploads/2016/01/ajax-loader.gif"
            height="200px"
            width="300px"
            alt=""
          />
        </center>
      ) : (
        <div id="homeProduct">{ans}</div>
      )}
    </>
  );
};

export default ProductSearch;
