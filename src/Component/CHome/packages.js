import React , {useState , useEffect, useReducer} from "react";
import axios from "axios";
import _, { range, result } from "lodash";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


function Packages(){

    return(

        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{color:"red"}}>LSR </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Home</a>
              </li>
             
  
              
             
            </ul>
            
          </div>
          <a class="btn btn-secondary" href="/" role="button">Login</a>
        </div>
      </nav>

      <br></br>


      <h2 align="center">Vehicle Packages</h2><br></br>

      
         
        
     
      <div class="container text-center">
        <div class="row row-cols-2 row-cols-lg-5 g-3 g-lg-3">
          <div class="col">
            <div class="card h-100">
              <img src="./images/pkg1.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                  <h5 class="card-title">Car</h5>
                  <p class="card-text">◾Good condition<br></br>◾ 5 seats with driver <br></br></p>
                </div>
              <div class="card-footer">
                <small class="text-muted">Price $50.00</small>
              </div>
              <button type="button" class="btn btn-success">Book Now</button>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
            <img src="./images/pkg2.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Van</h5>
                <p class="card-text">◾Good condition<br></br>◾ 13 seats with driver <br></br></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $60.00</small>
              </div>
              <button type="button" class="btn btn-success">Book Now</button>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
            <img src="./images/pkg3.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Bus</h5>
                <p class="card-text">◾Good condition<br></br>◾ 53 seats with driver <br></br></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $80.00</small>
              </div>
              <button type="button" class="btn btn-success">Book Now</button>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="./images/pkg4.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Three wheeler</h5>
                <p class="card-text">◾Good condition<br></br>◾ 4 seats with driver <br></br></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $20.00</small>
              </div>
              <button type="button" class="btn btn-success">Book Now</button>
            </div>
          </div>

          <div class="col">
          <div class="card h-100">
              <img src="./images/pkg5.jpg" height="250px" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">caravan</h5>
                <p class="card-text">◾Good condition<br></br>◾ You can arrange the seats as you like <br></br></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Price $50.00</small>
              </div>
              <button type="button" class="btn btn-success">Book Now</button>
            </div>
            </div>
          
         
          </div>
        </div><br></br>
      </div>



        
    )
    
}
export default Packages;