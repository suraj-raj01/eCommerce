import axios from "axios";
import { useEffect, useState } from "react";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const Details = () => {
  const [mydata, setMydata] = useState([]);
  const loadData = () => {
    let api = `http://localhost:3000/products`;
    axios.get(api).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  };
useEffect(()=>{
    loadData();
},[])
  const res = mydata.map((key)=>{
    return (
      <>
      <MDBCard id="card">
        <MDBCardImage src={key.image} position="top" alt="..." />
        <MDBCardBody>
          <MDBCardTitle>{key.name}</MDBCardTitle>
          <p style={{ color: "green" }}>Brand : {key.brand}</p>
          <MDBCardText>{key.description}</MDBCardText>
          <p style={{ color: "red" }}>Price : {key.price}</p>
          <MDBBtn>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </>
    );
  });
  return (
    <>
      <div>
        {res}
        </div>
    </>
  );
};
export default Details;
