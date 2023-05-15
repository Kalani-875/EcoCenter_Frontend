import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';
import { useNavigate } from "react-router-dom";
import {
    MDBValidation,
    MDBValidationItem,
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
import { values } from 'lodash';

  function Register(){

   const[name , setName] = useState("");
   const[email , setEmail] = useState("");
   const[password , setPassword] = useState("");

   const navigate = useNavigate();

    const initialValues = {username: "", email:"", password:""};    //validation

    const [formValues , setFormValues] = useState(initialValues);
    const [formErrors , setFormErrors] = useState({});
    const [isRegister, setIsRegister] = useState(false);


   /* const handleChange = (e) => {
        console.log(e.target);
        const{name, value} = e.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues);
    };*/

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsRegister(true);

    };

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isRegister){
            console.log(formValues);
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username = "Username is required!";
        }
        if(!values.email){
            errors.email = "Email is required!";
        }else if(!regex.test(values.email)){
          errors.email = "This is not a valid email format!";
        }
        if(!values.password){
            errors.password = "Password  is required!";
        }else if(values.password.length < 4){
          errors.password = "Password is more than 4 characters";
        }
        return errors;
    };

    function sendData (e){
      e.preventDefault();

        const newUser = {
          name,
          email,
          password
        }
  
        axios.post("http://localhost:8070/users/",newUser).then(()=>{
          alert("Successfully Registered")
  
          navigate("/Home");
        
      }).catch((err)=>{
        alert(err)
      })
    }

    return (
        <MDBContainer fluid>
          
          <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
          <MDBCardBody>

          

          <form onSubmit={sendData}>
            <MDBRow>
            
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
  
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
  
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>

                  <MDBInput required label='Your Name' id='name' type='text' className='w-100'  placeholder="Enter Your Name"
                    values={formValues.username}
                   //   onChange={handleChange}
                     
                    onChange={(e)=>{

                      setName(e.target.value);
       
                  }}
                  />

                </div>
                <p>{formErrors.username}</p>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                 
                  <MDBInput required label='Your Email' id='email' type='email' placeholder="Enter Your Email"
                       values={formValues.email}
                     //  onChange={handleChange}
                       
                    onChange={(e)=>{

                      setEmail(e.target.value);
       
                  }}
                   />
                 
                </div>
                <p>{formErrors.email}</p>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  
                  <MDBInput required label='Password' id='password' type='password' placeholder="Enter Your Password"
                        values={formValues.password}
                   //    onChange={handleChange}
                        
                    onChange={(e)=>{

                      setPassword(e.target.value);
       
                  }}
                  />
                  
                </div>
                <p>{formErrors.password}</p>
  
               
  
                <div className='mb-4'>
                  <p>
                     Already have an account?
                      <span className="line">
                        <a href="/Log">Sign in</a>
                      </span>
                  </p>
                </div>
  
                <button type="submit" className="btn btn-primary">Register</button>
  
              </MDBCol>
  
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>
  
            </MDBRow>
            </form>
            
          </MDBCardBody>
        </MDBCard>
          
        
  
      </MDBContainer>
    );
  }
  
export default Register;