import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Common/header";
import Footer from "../../Common/footer";

function vehicleAdmin() {
  const [vehicles, setVehicles] = useState([]);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverCity, setDriverCity] = useState("");
  const [telephoneNo, setTelephoneNo] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get("http://localhost:8070/Vehicle/all");
      setVehicles(response.data);
    } catch (error) {
      console.log("Failed to fetch vehicles: ", error);
    }
  };

  const addVehicle = async () => {
    const newVehicle = {
      vehicleNumber,
      driverName,
      driverCity,
      telephoneNo,
      emailAddress,
    };

    try {
      await axios.post("http://localhost:8070/Vehicle", newVehicle);
      fetchVehicles();
      clearForm();
    } catch (error) {
      console.log("Failed to add vehicle: ", error);
    }
  };

  const deleteVehicle = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/Vehicle/${id}`);
      fetchVehicles();
    } catch (error) {
      console.log("Failed to delete vehicle: ", error);
    }
  };

  const clearForm = () => {
    setVehicleNumber("");
    setDriverName("");
    setDriverCity("");
    setTelephoneNo("");
    setEmailAddress("");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Vehicle Admin</h1>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addVehicle"
        >
          Add Vehicle
        </button>

        <div
          class="modal fade"
          id="addVehicle"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="addVehicleLabel">
                  Add Vehicle Details
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div className="mb-3" class="form-group">
                    <label htmlFor="vehicleNumber" className="form-label">
                      Vehicle Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vehicleNumber"
                      value={vehicleNumber}
                      onChange={(e) => setVehicleNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="driverName" className="form-label">
                      Driver Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={driverName}
                      required
                      onChange={(e) => setDriverName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="driverCity" className="form-label">
                      Driver City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="driverCity"
                      value={driverCity}
                      onChange={(e) => setDriverCity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telephoneNo" className="form-label">
                      Telephone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="telephoneNo"
                      value={telephoneNo}
                      onChange={(e) => setTelephoneNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="emailAddress"
                      className="form-label"
                      for="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailAddress"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      required
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Discard
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={addVehicle}
                  data-bs-dismiss="modal"
                >
                  Add Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <h2>Vehicle List</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Vehicle Number</th>
              <th>Driver Name</th>
              <th>Driver City</th>
              <th>Telephone Number</th>
              <th>Email Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.vehicleNumber}</td>
                <td>{vehicle.driverName}</td>
                <td>{vehicle.driverCity}</td>
                <td>{vehicle.telephoneNo}</td>
                <td>{vehicle.emailAddress}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteVehicle(vehicle.id)}
                  >
                    Delete
                  </button>
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

export default vehicleAdmin;
