import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import { useNavigate } from "react-router-dom";

  function Login(){

    const navigate = useNavigate();

   
    
    return(
        <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
  
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' id='form2' type='email' placeholder="Enter Your Email"/>
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password' id='form3' type='password' placeholder="Enter Your Password"/>
                </div>
  
                <div className='mb-4'>
                  <p>
                     Don't have an account?
                      <span className="line">
                        <a href="/Reg">Sign up</a>
                      </span>
                  </p>
                </div>
               
                <button type="submit" className="btn btn-primary">Login</button>
  
              </MDBCol>
  
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>
  
            </MDBRow>


          </MDBCardBody>
        </MDBCard>
  
      </MDBContainer>
    );

    
  }

  export default Login;