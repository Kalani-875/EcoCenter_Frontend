import axios from "axios";
import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";
import { Form, Input, Table, Modal, Button, Space } from "antd";
import Header from "../../Common/header";
import Footer from "../../Common/footer";

const { Search } = Input;
function vehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverCity, setDriverCity] = useState("");
  const [telephoneNo, setTelephoneNo] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

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

  const update = async () => {
    const data = {
      vehicleNumber,
      driverName,
      driverCity,
      telephoneNo,
      emailAddress,
    };
    await axios
      .patch("http://localhost:8070/Vehicle/" + selectedId, data)
      .then((value) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log("update vehicle failed " + err);
      });

    await axios
      .get("http://localhost:8070/Vehicle")
      .then((value) => {
        setVehicles(value.data.vehicles);
      })
      .catch((err) => {
        console.log("get vehicles failed " + err);
      });
    setUpdateModalOpen(false);
  };

  //const deleteVehicle = async (id) => {
  //  try {
  //    await axios.delete(`http://localhost:8070/Vehicle/${id}`);
  //    fetchVehicles();
  //  } catch (error) {
  //    console.log("Failed to delete vehicle: ", error);
  //  }
  //};

  const clearForm = () => {
    setVehicleNumber("");
    setDriverName("");
    setDriverCity("");
    setTelephoneNo("");
    setEmailAddress("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setUpdateModalOpen(false);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    axios
      .get(`http://localhost:8070/Vehicle?search=${searchQuery}`)
      .then((value) => {
        setResults(value.data.vehicles);
      })
      .catch((err) => {
        console.log("search vehicles failed " + err);
      });
  };

  const columns = [
    {
      title: "Vehicle Number",
      dataIndex: "vehicleNumber",
      key: "vehicleNumber",
    },
    {
      title: "Driver Name",
      dataIndex: "driverName",
      key: "driverName",
    },
    {
      title: "Driver City",
      dataIndex: "driverCity",
      key: "driverCity",
    },
    {
      title: "Telephone Number",
      dataIndex: "telephoneNo",
      key: "telephoneNo",
    },
    {
      title: "Email Address",
      dataIndex: "emailAddress",
      key: "emailAddress",
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (cellContent, record) => {
        return (
          <>
            <Space className="site-button-ghost-wrapper" wrap>
              <Button
                type="primary"
                ghost
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#updateVehicle"
                onClick={async (e) => {
                  setSelectedRecord(record);
                  setVehicleNumber(record.vehicleNumber);
                  setDriverName(record.driverName);
                  setDriverCity(record.driverCity);
                  setTelephoneNo(record.telephoneNo);
                  setEmailAddress(record.emailAddress);
                  setSelectedId(record._id);
                  // Form.setFieldsValue({
                  //   "vehicle-number": vehicleNumber,
                  //   "driver-name": driverName,
                  //   "driver-city": driverCity,
                  //   "telephone-number": telephoneNo,
                  //   "email-address": emailAddress,
                  // });

                  setUpdateModalOpen(true);
                }}
                key={"update"}
              >
                Update
              </Button>
              <Button
                danger
                type="primary"
                key={"delete"}
                onClick={async () => {
                  Modal.confirm({
                    title: "Confirm",
                    content: "Are you sure you want to delete this item?",
                    okText: "Yes",
                    okType: "danger",
                    cancelText: "No",
                    onOk: async () => {
                      await axios
                        .delete(`http://localhost:8070/Vehicle/` + record._id)
                        .then((value) => {
                          window.location.reload(true);
                        });
                      await axios
                        .get(`http://localhost:8070/Vehicle`)
                        .then((value) => {
                          setVehicles(value.data.vehicles);
                        })
                        .catch((err) => {
                          console.log("get vehicles failed " + err);
                        });
                    },
                  });
                }}
              >
                Delete
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Header />{" "}
      <div className="container">
        <br/>
        <h2>Vehicles List</h2>
        <br></br>
        <div class="container">
          <div class="row justify-content-end align-items-start">
            <div class="col-12">
            <Button type="dashed" value="large"><a href="/driverSchedule">Driver Schdeule</a></Button>
            </div>
          </div>

          <div class="container">
            <div class="row justify-content-end align-items-start">
              <div class="col-2">
                <Button
                  type="primary"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#addVehicle"
                >
                  Add Vehicle
                </Button>
                <hr />
              </div>
              <div class="row justify-content-end align-items-start">
                <div class="col-2">
                  <Search
                    placeholder="search by city..."
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{ width: 200 }}
                    className="search-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <Table
          columns={columns}
          dataSource={vehicles.filter((vehicles) =>
            vehicles.driverCity.toLowerCase().includes(searchText.toLowerCase())
          )}
        />

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
                      required
                      onChange={(e) => setVehicleNumber(e.target.value)}
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
        <div
          open={isUpdateModalOpen}
          onOk={update}
          onCancel={handleCancel}
          class="modal fade"
          id="updateVehicle"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="updateVehicleLabel">
                  Update Vehicle Details
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
                  onClick={update}
                  data-bs-dismiss="modal"
                >
                  Update Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default vehicleList;
