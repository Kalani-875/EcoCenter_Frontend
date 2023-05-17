import React from "react";

import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Schedule() {
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
            </ul>
          </div>
        </div>
      </nav>
      <br></br>

      <div className="col" style={{ width: "800px" }}>
        {/* Add the desired width to the div */}
        <div className="card">
          <img
            src="./images/admin/Transport.jpg"
            height="350px"
            width="100px"
            className="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Shedule Management</h5>
            <p class="card-text"></p>
          </div>
          <a type="button" class="btn btn-success" href="/add">
            Add Shedule
          </a>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
