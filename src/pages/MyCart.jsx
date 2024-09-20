import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { qntyInc, qntyDec, dataDel } from "../addtocartSlice";
import { useNavigate } from "react-router-dom";
const MyCart = () => {

  // checkout
  const navigate = useNavigate();
  const checkOut = () =>{
    navigate("/checkout")
  }
  // see details
  const details = (id) =>{
    navigate(`/details/${id}`)
  }

  const Data = useSelector((state) => state.addCart.cart);
  console.log(Data);
  const dispatch = useDispatch();
  const incQnty = (id) => {
    dispatch(qntyInc({ id: id }));
  };

  const decQnty = (id) => {
    dispatch(qntyDec({ id: id }));
  };

  const dataDelete = (id) => {
    dispatch(dataDel({ id: id }));
  };

  let sno = 0;
  let grandTotal = 0;
  const ans = Data.map((key) => {
    sno++;
    grandTotal += key.price * key.qnty;
    return (
      <>
        <tr>
          <td> {sno} </td>
          <td>
            <img src={key.image} id="myCart-img" onClick={()=>{details(key.id)}}/>{" "}
          </td>
          <td>{key.name} </td>
          <td>{key.brand} </td>
          <td>{key.model} </td>
          <td style={{ fontSize: "13px", padding: "0px 10px", width: "300px" }}>
            <p>{key.description}</p>
          </td>
          <td style={{ fontWeight: "bold",width:'120px' }}>
            {key.price} {"₹"}
          </td>
          <td>
            <FaMinusCircle
              onClick={() => {
                decQnty(key.id);
              }}
              style={{ cursor: "pointer" }}
            />
            <span style={{ fontWeight: "bold", padding: "5px 5px" }}>
              {key.qnty}
            </span>

            <FaPlusCircle
              onClick={() => {
                incQnty(key.id);
              }}
              style={{ cursor: "pointer" }}
            />
          </td>
          <td>
            {key.price * key.qnty}
            {" ₹"}
          </td>
          <td>
            <Button
              variant="outline-primary"
              onClick={() => {
                dataDelete(key.id);
              }}
            >
              {" "}
              Delete
            </Button>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <br />
      <center>
        <h1>
          <b> My Carts</b>
        </h1>
        <hr />
      </center>
      <br />
      <div style={{ padding: "0px 20px" }}>
        <Table responsive id="mycart">
          <thead id="mycart1">
            <tr>
              <th>S.No</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Model </th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody id="mycart2">
            {ans}

            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th width="200" style={{ color: "#6868b3", fontSize: "20px" }}>
                {" "}
                Grand Total:{" "}
              </th>
              <th style={{ color: "#6868b3", fontSize: "20px" }}>
                {" "}
                {grandTotal}
                {".00₹"}{" "}
              </th>
              <th></th>
            </tr>
          </tbody>
        </Table>
        <div id="checkout">
          <Button variant="outline-primary" onClick={checkOut}>CheckOut</Button>
        </div>
      </div>
    </>
  );
};

export default MyCart;
