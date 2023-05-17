import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
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
import { get } from "lodash";
import { useParams } from "react-router-dom";

function EditShedulles(_userId) {
  const [Shedulles, setShedulles] = useState(["Shedulles"]);
  const [Sctact, setSctact] = useState("Sctact");
  const [Sadres, setSadres] = useState("Sadres");
  const [Scity, setScity] = useState("Scity");
  const [Sdate, setSdate] = useState("Sdate");
  const params = useParams();

  useEffect(() => {
    getShedullesDetails();
  }, []);

  const getShedullesDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:8070/Shedulles/get/${params.id}`);
    const { Shedulles } = await result.json();


    setSctact(Shedulles.Sctact);
    setSadres(Shedulles.Sadres);
    setScity(Shedulles.Scity);
    setSdate(Shedulles.Sdate);
  };

  function updateShedulles(e) {
    e.preventDefault();

    const updateShedulles= {
      Sctact,
      Sadres,
      Scity,
      Sdate,
    };
    axios
      .put(`http://localhost:8070/Shedulles/update/${params.id}`, updateShedulles)
      .then((res) => {
        alert("Customer Details Updated");

        setShedulles(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "red" }}>
          Eco-Center
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/Schedule">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/all">
                  Schedulles Details
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <br></br>
        <h2>Update Shedulles Details</h2>

        <MDBContainer fluid>
          <MDBRow className="justify-content-center align-items-center m-5">
            <MDBCard>
              <form onSubmit={updateShedulles}>
                <div className="form-group">
                  <MDBCol md="6">
                    <label for="name">Schedule Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Sctact"
                      aria-describedby="emailHelp"
                      placeholder="Enter Schedule Contact"
                      value={Sctact}
                      onChange={(e) => {
                        setSctact(e.target.value);
                      }}
                    />
                  </MDBCol>
                </div>

                <div className="form-group">
                  <MDBCol md="6">
                    <label for="vname">Schedule Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Sadres"
                      aria-describedby="emailHelp"
                      placeholder="Enter Schedule Address"
                      value={Sadres}
                      onChange={(e) => {
                        setSadres(e.target.value);
                      }}
                    />
                  </MDBCol>
                </div>

                <div className="form-group">
                  <MDBCol md="6">
                    <label for="vname">Schedule City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Scity"
                      aria-describedby="emailHelp"
                      placeholder="Enter Schedule City"
                      value={Scity}
                      onChange={(e) => {
                        setScity(e.target.value);
                      }}
                    />
                  </MDBCol>
                </div>

                <div className="form-group">
                  <MDBRow>
                    <MDBCol md="6">
                      <label for="vprice">Schedule Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Sdate"
                        aria-describedby="emailHelp"
                        placeholder="Enter Schedule Date"
                        value={Sdate}
                        onChange={(e) => {
                          setSdate(e.target.value);
                        }}
                      />
                    </MDBCol>
                  </MDBRow>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </MDBCard>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default EditShedulles;
