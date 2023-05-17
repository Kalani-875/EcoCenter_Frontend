import React from "react";
import axios from "axios"; 
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Home(){
    return(
        
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"red"}}>Eco-Center </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            

            <li className="nav-item">
              <a className="nav-link" href="/Home">Admin Home</a>
            </li>

            
           
          </ul>
          
        </div>
        <a class="btn btn-secondary" type="submit" justify-content-md-end href="/Log">Admin</a>
      </div>
    </nav>

     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
         <div class="carousel-item active">
         <img src="./images/img1.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "100" height= "550"/>
      </div>
      <div class="carousel-item">
      <img src="./images/img2.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "100%" height= "550"/>
      </div>
      <div class="carousel-item">
       <img src="./images/img3.jpg" class="d-block w-100" alt="..." background-size= "cover" background-position = "center top"  width= "100%" height= "550"/>
       </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
        </button>
       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button>
  
       <br></br>
      
       <div class="container overflow-hidden text-center">
       <div class="row gx-5">
         <div class="col">
         <div class="p-3 border bg-light"><h4>BEST PRICE GUARANTEE</h4>
         <p>Tourism has witnessed some of the toughest price competition in today's world. 
            Yet for all most customers do not treat, the price is The vital point in their decision making process.
             Although LSR Prices might not be the lowest in the Marketplace, customers will be rest assured that,
            They will get a service proportionate to the price they have paid, which will offer them a "Money's Worth " Experience.</p>
         
         </div>
        </div>
       <div class="col">
          <div class="p-3 border bg-light"><h4>TRUST AND SAFETY</h4>
          <p>Capability to offer its service with great confidence places LSR's customers on a foundation on which they would engage in activities /
             programmes based on built-up trust knowing that LSR will lay great emphasis on their safety through out the encounters.</p>
          </div>
        </div>

        <div class="col">
         <div class="p-3 border bg-light"><h4>BEST TRAVEL AGENT</h4>
         <p>Being able to provide any tailor-made tour programme / 
            activity with its own resources such as the Water Sports Centres, 
            Adventure Bases,Fleet of Vehicles etc. puts LSR in a unique position.</p>
         
         </div>
        </div>

        <div class="col">
         <div class="p-3 border bg-light"><h4>TRAVEL INSURANCE</h4>
         <p>From the very beginning The LSR has been helping travelers in travel with responsibility.
            In order to minimize the risks can be occurred during the tour, 
            LSR provides you a range of travel insurance options specifically designed to give you peace of mind when you travel with us.</p>
         
         </div>
        </div>

        </div>
         </div>
        <br></br>
        <br></br>
         <div className="container">
            <h2 align="center" >TOURISM IS EVERYWHERE</h2>
            <h4 align="center">MAKE YOUR NEXT VACATION WITH US</h4>
         </div>

        <br></br>
        <br></br>
         <div>
         <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
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
                LSR TRAVEL AGENCY
              </h6>
              <p>
              Your Specialized Travel Partner in Sri Lanka<br/>
              Headquarters:<br/>
              29 B, S.De. S. Jayasinghe Mawatha,
              Kalubowila, Dehiwela,<br/>
              Sri Lanka
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
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
                LSR, Sri Lanka
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                LSR@discoverSl.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +94-11-282-4500 
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +94-11-282-4501
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        
        <a className='text-reset fw-bold' href=''>  
         All Rights Reserved by LSR Travel. </a>
      </div>
    </MDBFooter>
         </div>


         </div>
         </div>
         
       
    
    )
}

export default Home;