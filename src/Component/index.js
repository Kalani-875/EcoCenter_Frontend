import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSelect,
  MDBRadio,
} from "mdb-react-ui-kit";
import { Card, Container, Row, Col } from "react-bootstrap";
import emailjs from "react"
import createContext from 'react';


export default function Index() {

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
                <a className="nav-link" href="/all">
                  Shedulles Info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>contact us</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <script src="issues.js"></script>

<script type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/emailjs-com/dist/email.min.js"
    onload="initEmailJS()">
</script>

<script type="text/javascript">
   function initEmailJS() {
      emailjs.init("W_ZBPVrP-GPO2MLek")
   }
</script>
  </head>
  <body>
    <div class="container border mt-3 bg-light">
        <div class="row">
          <div class="col-md-6 p-5 bg-primary text-white">
            <h1>Hi there!</h1>
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
            </h4>
          </div>
          <div class="col-md-6 border-left py-3">
            <h1>Contact form</h1>
            <div class="form-group">
              <h5 for="name">Name</h5>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
              />
            </div>
            <div class="form-group">
              <h5 for="email">Email</h5>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <h5 for="message">Message</h5>
              <textarea class="form-control" id="message" rows="3"></textarea>
            </div>
            <button class="btn btn-primary" onclick="sendMail()">Submit</button>
          </div>
        </div>
      </div>
  </body>
  </div>
)

  }
