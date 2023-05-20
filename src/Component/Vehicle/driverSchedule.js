import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../../Common/header";
import Footer from "../../Common/footer";

// const { Search } = Input;
export default function AllShedulles() {
  const navigate = useNavigate();

  const [Shedulles, setShedulles] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [value, setValue] = useState("");
  const [tableFilter, setTableFilter] = useState([]);

  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = Shedulles.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
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
    <div
      style={{
        position: "relative",
      }}
    >
      <Header />
      <div className="container">
        <br />
        <h2>Driver Schedule</h2>
        <br></br>
        <div class="container">
          <div class="row justify-content-end align-items-start">
            <div class="col-12">
              <Button type="dashed">
                <a href="/vehicleList">Vehicle List</a>
              </Button>
            </div>
          </div>

          <div class="container">
            <div class="row justify-content-end align-items-start">
              <div class="col-2">
                <Button type="primary" className="btn-success">
                  <a href="/TransRepo" style={{ textDecoration: "none" }}>
                    Genarate Report
                  </a>
                </Button>
                <hr />
              </div>
              <div class="row justify-content-end align-items-start">
                <div class="col-2">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="search..."
                    aria-label="Search"
                    aria-describedby="search-addon"
                    value={value}
                    onChange={filterData}
                  />
                  {/* <Search
                    placeholder="input search text"
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ width: 200 }}
                    className="search-input"
                  />
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Contact</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Scheduled Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {value.length > 0
              ? tableFilter.map((Shedulles, id) => (
                  <tr key={id}>
                    <td>{Shedulles.Sctact}</td>
                    <td>{Shedulles.Sadres}</td>
                    <td>{Shedulles.Scity}</td>
                    <td>{Shedulles.Sdate}</td>

                    <td>
                      <Button type="primary" onClick={() => Shedulles._id}>
                        <i className="far fa-trash-alt"></i>&nbsp;Notify
                      </Button>
                    </td>
                  </tr>
                ))
              : Shedulles.map((Shedulles, id) => (
                  <tr key={id}>
                    <td>{Shedulles.Sctact}</td>
                    <td>{Shedulles.Sadres}</td>
                    <td>{Shedulles.Scity}</td>
                    <td>{Shedulles.Sdate}</td>

                    <td>
                      &nbsp;
                      <Button type="primary" onClick={() => Shedulles._id}>
                        <i className="far fa-trash-alt"></i>&nbsp;Notify
                      </Button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
