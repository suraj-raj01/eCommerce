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
  const [myPrice, setMyPrice] = useState("");
  const [displayState, setDisplayState] = useState(true);

  const [mydata, setMydata] = useState([]);
  const [myPriceData, setPriceMyData] = useState([]);
  const dispatch = useDispatch();

  const loadData = () => {
    let api = `http://localhost:3000/products`;
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
            <Card.Title> {key.name} </Card.Title>
            <h4 style={{ color: "blue", fontSize: "14px", fontWeight: "bold" }}>
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

  const catHandle = () => {
    let api = `http://localhost:3000/products/?brand=${mycat}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
    setDisplayState(true);
  };

  const handleSubPrice = () => {
    let api = "http://localhost:3000/products";
    axios.get(api).then((res) => {
      setPriceMyData(res.data);
    });
    setDisplayState(false);
  };

  const ans1 = myPriceData.map((key) => {
    if (myPrice == 20000) {
      if (key.price > 0 && key.price <= 20000) {
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
      }
    }

    if (myPrice == 30000) {
      if (key.price > 20000 && key.price <= 30000) {
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
      }
    }

    if (myPrice == 40000) {
      if (key.price > 30000 && key.price <= 40000) {
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
      }
    }

    if (myPrice == 50000) {
      if (key.price > 40000 && key.price <= 50000) {
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
      }
    }

    if (myPrice == 60000) {
      if (key.price > 50000 && key.price<=60000) {
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
      }
    }

    if (myPrice == 70000) {
      if (key.price > 60000) {
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
      }
    }
  });

  return (
    <>
      <div id="shop">
        {/* filters */}
        <div id="filter-data">
          <h5
            style={{
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Search By Brands
          </h5>
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
            Asus
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
          <div id="radio">
            Zebronics
            <input
              type="radio"
              value="ZEBRONICS"
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
          <h5
            style={{
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Search By Prices
          </h5>
          <div id="radio">
            20000 & Below
            <input
              type="radio"
              value="20000"
              name="cat"
              onChange={(e) => {
                setMyPrice(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            20000 - 30000
            <input
              type="radio"
              value="30000"
              name="cat"
              onChange={(e) => {
                setMyPrice(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            30000 - 40000
            <input
              type="radio"
              value="40000"
              name="cat"
              onChange={(e) => {
                setMyPrice(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            40000 - 50000
            <input
              type="radio"
              value="50000"
              name="cat"
              onChange={(e) => {
                setMyPrice(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            50000 - 60000
            <input
              type="radio"
              value="60000"
              name="cat"
              onChange={(e) => {
                setMyPrice(e.target.value);
              }}
            />
          </div>
          <div id="radio">
            60000 & Above
            <input
              type="radio"
              value="70000"
              name="cat"
              onChange={(e) => {
                setMyPrice(e.target.value);
              }}
            />
          </div>
          <div>
            <Button
              size="sm"
              id="filter-btn"
              variant="outline-primary"
              onClick={handleSubPrice}
            >
              Search{" "}
            </Button>
          </div>
        </div>

        {/* products */}
        <div id="show-data">
          <div id="proHeading">
            <br />
            <h1 style={{ fontWeight: "bold" }}>
              {" "}
              Your Search Items
            </h1>
          </div>
          <div id="homeProduct">{displayState ? ans : ans1}</div>
        </div>
      </div>
    </>
  );
};
export default Shop;
