import React from "react";
import axios from "axios";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { alignPropType } from "react-bootstrap/esm/types";

function home() {
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
                <a className="nav-link" href="/vehicleList">
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
              src="./images/cleanSociety.jpg"
              class="d-block w-100"
              alt="..."
              background-size="cover"
              background-position="center top"
              width="100"
              height="650"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./images/cleanBeach.jpg"
              class="d-block w-100"
              alt="..."
              background-size="cover"
              background-position="center top"
              width="100%"
              height="650"
            />
          </div>
          <div class="carousel-item">
            <img
              src="./images/garbageCollecting.jpg"
              class="d-block w-100"
              alt="..."
              background-size="cover"
              background-position="center top"
              width="100%"
              height="650"
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
                <h4>Join Us in Creating a Cleaner and Greener World</h4>
                <p>
                At Eco Center, we are committed to preserving the environment and ensuring a sustainable future. We believe that keeping the environment clean is not only crucial for our well-being but also for the generations to come. By adopting eco-friendly practices and supporting those who clean the environment, we can make a significant impact on the health of our planet. Join us in our mission to create a cleaner and greener world.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="p-3 border bg-light">
                <h4>Supporting Environmental Heroes: Recognizing Their Efforts</h4>
                <p>
                One of the key ways we contribute to a cleaner environment is by actively supporting the individuals who dedicate their time and effort to cleaning and preserving our surroundings. These unsung heroes work tirelessly to ensure that our land, water, and air are free from pollutants and waste. We recognize and appreciate their invaluable contributions. By acknowledging their efforts, offering resources, and promoting their work, we strive to empower and uplift these environmental heroes. 
                </p>
              </div>
            </div>

            <div class="col">
              <div class="p-3 border bg-light">
                <h4>Preserving Life on Land: Safeguarding Biodiversity</h4>
                <p>
                Preserving life on land is of utmost importance to us. The land ecosystems harbor a diverse range of plant and animal species, contributing to the delicate balance of our planet's biodiversity. By protecting and restoring habitats, we can safeguard the unique life forms that depend on them. At Eco Center, we actively support conservation initiatives that focus on creating wildlife corridors, establishing protected areas, and engaging local communities. Together, we can ensure the continued existence of endangered species and the sustainability of our land ecosystems.
                </p>
              </div>
            </div>

            <div class="col">
              <div class="p-3 border bg-light">
                <h4>Empowering Individuals: Making a Positive Impact on the Environment</h4>
                <p>
                We firmly believe that each individual has the power to make a positive impact on the environment. Whether it's through small everyday actions or active participation in community initiatives, everyone can contribute to a cleaner and safer world. We encourage you to join us in practicing responsible waste management, conserving resources, and adopting sustainable lifestyles. By spreading awareness about the importance of environmental preservation and advocating for policy changes, we can create a collective movement towards a brighter and greener future for all. Together, let's keep the environment clean, support those who clean it, and ensure the safety of life on land.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          <h2 align="center">Clean Earth, Stronger Future</h2>
          <h4 align="center">Join the Green Revolution!</h4>
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

export default home;
