import React from "react";
import axios from "axios";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
            Eco-Center{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Schedule">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vehicleAdmin">
                  Driver
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Donations
                </a>
              </li>
            </ul>
          </div>
          <a
            class="btn btn-secondary"
            type="submit"
            justify-content-md-end
            href="/Log"
          >
            Log In
          </a>
        </div>
      </nav>

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./images/img1.jpg"
              class="d-block w-100"
              alt="..."
              background-size="cover"
              background-position="center top"
              width="100"
              height="550"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./images/img2.jpg"
              class="d-block w-100"
              alt="..."
              background-size="cover"
              background-position="center top"
              width="100%"
              height="550"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./images/img3.jpg"
              class="d-block w-100"
              alt="..."
              background-size="cover"
              background-position="center top"
              width="100%"
              height="550"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

        <br></br>

        <div class="container overflow-hidden text-center">
          <div class="row gx-5">
            <div class="col">
              <div class="p-3 border bg-light">
                <h4>BEST PRICE GUARANTEE</h4>
                <p>
                  Tourism has witnessed some of the toughest price competition
                  in today's world. Yet for all most customers do not treat, the
                  price is The vital point in their decision making process.
                  Although LSR Prices might not be the lowest in the
                  Marketplace, customers will be rest assured that, They will
                  get a service proportionate to the price they have paid, which
                  will offer them a "Money's Worth " Experience.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="p-3 border bg-light">
                <h4>TRUST AND SAFETY</h4>
                <p>
                  Capability to offer its service with great confidence places
                  LSR's customers on a foundation on which they would engage in
                  activities / programmes based on built-up trust knowing that
                  LSR will lay great emphasis on their safety through out the
                  encounters.
                </p>
              </div>
            </div>

            <div class="col">
              <div class="p-3 border bg-light">
                <h4>BEST TRAVEL AGENT</h4>
                <p>
                  Being able to provide any tailor-made tour programme /
                  activity with its own resources such as the Water Sports
                  Centres, Adventure Bases,Fleet of Vehicles etc. puts LSR in a
                  unique position.
                </p>
              </div>
            </div>

            <div class="col">
              <div class="p-3 border bg-light">
                <h4>TRAVEL INSURANCE</h4>
                <p>
                  From the very beginning The LSR has been helping travelers in
                  travel with responsibility. In order to minimize the risks can
                  be occurred during the tour, LSR provides you a range of
                  travel insurance options specifically designed to give you
                  peace of mind when you travel with us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <h2 align="center">TOURISM IS EVERYWHERE</h2>
          <h4 align="center">MAKE YOUR NEXT VACATION WITH US</h4>
        </div>

        <br></br>
        <br></br>
        <div>
          <MDBFooter
            bgColor="light"
            className="text-center text-lg-start text-muted"
          >
            <div
              className="text-center p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              All Rights Reserved by Eco Center 2023
            </div>
          </MDBFooter>
        </div>
      </div>
    </div>
  );
}

export default Home;
