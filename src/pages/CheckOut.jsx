import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const CheckOut = () => {
  return (
    <>
      <br />
      <br />
      <center><h3>CheckOut</h3></center>
      <br />
      <div id="checkout-page">
        <div id="delivery-details">
          <h3>Delivery Details</h3>

          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Country / Region</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1" selected>
                  India
                </option>
                <option value="2">USA</option>
                <option value="3">Nepal</option>
                <option value="4">England</option>
                <option value="5">Pakistan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Full Name (Firs and Last name)</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Pin code</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>
                Flat, House no., Building, Company, Apartment
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Area, Street, Sector, Village</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Landmark</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Town / City</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>State</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option value="1" selected>
                    Bihar
                  </option>
                  <option value="2">MadhyaPradesh</option>
                  <option value="3">UttarPradesh</option>
                  <option value="4">Mumbai</option>
                  <option value="5">Tamilnadu</option>
                  <option value="5">Mumbai</option>
                  <option value="5">Delhi</option>
                  <option value="5">WestBengal</option>
                  <option value="5">Punjab</option>
                  <option value="5">Gujrat</option>
                  <option value="5">Kerala</option>
                  <option value="5">AndraPradesh</option>
                  <option value="5">Manipur</option>
                  <option value="5">Assam</option>
                  <option value="5">Jambu & Kashmir</option>
                  <option value="5">Chhatishgadh</option>
                </Form.Select>
              </Form.Group>
            </div>
            <Button variant="warning" type="submit">
              Use this address
            </Button>
          </Form>
        </div>

        <div id="payment-method">
          <h3>Select a Payment Method</h3>
          <Form>
          <div id="pay">
            <Form.Label>Debit or Credit card</Form.Label>
            <Form.Check type="radio" aria-label="pay" name="payment" />
          </div>
          <img
            src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg"
            alt=""
            height="85px"
          />
          <br/>
          <Form.Label> <a href="#" style={{color:'#6868b3'}}>Add Your Card Number</a></Form.Label>
          <div id="pay">
            <Form.Label>Net banking</Form.Label>
            <Form.Check type="radio" aria-label="pay" name="payment" />
          </div>
          <Form.Select aria-label="Default select example">
            <option value="1" selected>
              Choose an Option
            </option>
            <option value="2">SBI</option>
            <option value="2">HDFC</option>
            <option value="3">IndianBank</option>
            <option value="4">Kotak Mahidra</option>
            <option value="5">BOB</option>
            <option value="5">BOI</option>
            <option value="5">AXIS</option>
            <option value="5">ICICI</option>
          </Form.Select>
          <div id="pay">
          <Form.Label>Other UPI Apps</Form.Label>
          <Form.Check type="radio" aria-label="pay" name="payment" />
          </div>
          <div id="pay">
          <Form.Label>Cash on Delivery / Pay on Delivery</Form.Label>
          <Form.Check type="radio" aria-label="pay" name="payment" />
          </div>
          <div id="pay">
          <Form.Label>EMI</Form.Label>
          <Form.Check type="radio" aria-label="pay" name="payment" />
          </div>
          <Button variant="warning">Use the Payment Method</Button>
          </Form>
        </div>
      </div>
      <br />
    </>
  );
};
export default CheckOut;
