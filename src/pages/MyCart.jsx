import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { qntyInc, qntyDec, dataDel } from "../addtocartSlice";
const MyCart = () => {
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
            <img src={key.image} width="130px" height="130" />{" "}
          </td>
          <td>{key.name} </td>
          <td>{key.brand} </td>
          <td>{key.model} </td>
          <td style={{ fontSize: "13px",padding:"0px 10px", width:'300px' }}>
            <p>
              {key.description}
            </p>
          </td>
          <td style={{fontWeight:'bold'}}>{key.price} {"₹"}</td>
          <td>
            <FaMinusCircle
              onClick={() => {
                decQnty(key.id);
              }}
              style={{ cursor: "pointer" }}
            />
              <span style={{fontWeight:'bold',padding:'5px 5px'}}>{key.qnty}</span>
          
            <FaPlusCircle
              onClick={() => {
                incQnty(key.id);
              }}
              style={{ cursor: "pointer" }}
            />
          </td>
          <th>{key.price * key.qnty}{" ₹"}</th>
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
      <div style={{padding:'0px 20px'}}>
      <Table responsive>
        <thead>
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
        <tbody>
          {ans}

          <tr>
            <th></th>
            <th> </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th width="200" style={{ color: "#6868b3", fontSize: "20px" }}>
              {" "}
              Grand Total:{" "}
            </th>
            <th style={{ color: "#6868b3", fontSize: "20px" }}> {grandTotal}{".00₹"} </th>
            <td>
              <img
                src="https://play-lh.googleusercontent.com/HArtbyi53u0jnqhnnxkQnMx9dHOERNcprZyKnInd2nrfM7Wd9ivMNTiz7IJP6-mSpwk"
                alt=""
                height="30px"
              />
              <img
                src="https://pbs.twimg.com/profile_images/1615271089705463811/v-emhrqu_400x400.png"
                height="25px"
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default MyCart;
