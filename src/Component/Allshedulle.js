import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllShedulles() {
  const navigate = useNavigate();

  const [Shedulles, setShedulles] = useState([]);

  const [value, setValue] = useState("");
  const [tableFilter, setTableFilter] = useState([]);

  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = Shedulles.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k])
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setShedulles([...Shedulles]);
    }
  };

  useEffect(() => {
    function getShedulles() {
      axios
        .get("http://localhost:8070/Shedulles/")
        .then((res) => {
          setShedulles(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getShedulles();
  }, []);

  function deleteShedulles(userId) {
    axios
      .delete(`http://localhost:8070/Shedulles/delete/${userId}`)
      .then((res) => {
        alert("Deleted");
        //navigate("/all");
        window.location.reload();

        res.json().then((res) => {
          console.warn(res);
        });
      });
  }

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
                <a className="nav-link" href="/add">
                   Info
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <br />
        <h2>Schedulles Management</h2>
        <br></br>

        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={value}
            onChange={filterData}
          />

          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>

        <br></br>

        <button className="btn btn-success">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
            Add New Schedule
          </a>
        </button>
        <br></br>
        <br></br>
        <button className="btn btn-success">
          <a
            href="/TransRepo"
            style={{ textDecoration: "none", color: "white" }}
          >
            Genarate Report
          </a>
        </button>
        <br></br>

        <br></br>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Schedule id</th>
              <th scope="col">Schedule Contact</th>
              <th scope="col">Schedule Address</th>
              <th scope="col">Schedule City</th>
              <th scope="col">Schedule Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0
              ? tableFilter.map((Shedulles, id) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{Shedulles.Sctact}</td>
                    <td>{Shedulles.Sadres}</td>
                    <td>{Shedulles.Scity}</td>
                    <td>{Shedulles.Sdate}</td>

                    <td>
                      <a className="btn btn-warning" href={"/Update/"}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteShedulles(Shedulles._id)}
                      >
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </button>
                    </td>
                  </tr>
                ))
              : Shedulles.map((Shedulles, id) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{Shedulles.Sctact}</td>
                    <td>{Shedulles.Sadres}</td>
                    <td>{Shedulles.Scity}</td>
                    <td>{Shedulles.Sdate}</td>

                    <td>
                      <a
                        className="btn btn-warning"
                        href={`/Update/${Shedulles._id}`}
                      >
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteShedulles(Shedulles._id)}
                      >
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
