import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Footer=()=>{
  const navigate = useNavigate();
  const Dell = () =>{
    navigate("/dell");
  }
  const Lenovo = () =>{
    navigate("/lenovo");
  }
  const Acer = () =>{
    navigate("/acer");
  }
  const Apple = () =>{
    navigate("/mac");
  }
    return(
        <>
        
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://x.com/im_suraj03' target='_blank'  className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/in/suraj-kumar-1965b0296/' target='_blank' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/suraj-raj01' target='_blank' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                LaptopShop
              </h6>
              <p>
                "Welcome To Laptopshop.com" Buy Laptops Online | Best Prices, Top Brands Premium Laptops | Gaming, Business, & More Discover Your Perfect Laptop
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a onClick={Dell} href='#' className='text-reset'>
                  Dell
                </a>
              </p>
              <p>
                <a onClick={Lenovo} href='#!' className='text-reset'>
                  Lenovo
                </a>
              </p>
              <p>
                <a onClick={Acer} href='#!' className='text-reset'>
                  Acer
                </a>
              </p>
              <p>
                <a onClick={Apple} href='#!' className='text-reset'>
                  Apple
                </a>
              </p>

            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                LIG-140 Bharti-Niketan, Bhopal INDIA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@laptopshop.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> <b>+ 91 6206546029</b>
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> <b>+ 91 9407567037</b>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='/'>
          laptopshop.com
        </a>
      </div>
    </MDBFooter>
        </>
    )
}
export default Footer