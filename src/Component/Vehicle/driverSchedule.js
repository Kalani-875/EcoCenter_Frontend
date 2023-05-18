import { Button, Form, Input, Modal, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";

const { Search } = Input;

const driverSchedule = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [form] = Form.useForm();
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverCity, setDriverCity] = useState("");
  const [telephoneNo, setTelephoneNo] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    const data = {
      vehicleNumber,
      driverName,
      driverCity,
      telephoneNo,
      emailAddress,
    };
    await axios
      .post("http://localhost:8070/Vehicle", data)
      .then((value) => {})
      .catch((err) => {
        console.log("add vehicle failed " + err);
      });

    await axios
      .get("http://localhost:8070/Vehicle/0/0")
      .then((value) => {
        setVehicles(value.data.vehicles);
      })
      .catch((err) => {
        console.log("get vehicles failed " + err);
      });
    setIsModalOpen(false);
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
      .put("http://localhost:8070/Vehicle" + selectedId, data)
      .then((value) => {})
      .catch((err) => {
        console.log("update vehicle failed " + err);
      });

    await axios
      .get("http://localhost:8070/Vehicle/0/0")
      .then((value) => {
        setVehicles(value.data.vehicles);
      })
      .catch((err) => {
        console.log("get vehicles failed " + err);
      });
    setUpdateModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setUpdateModalOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8070/Vehicle/all")
      .then((value) => {
        setVehicles(value.data.vehicles);
      })
      .catch((err) => {
        console.log("get vehicles failed " + err);
      });
  }, []);
  /*
  const generatePdf = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      columns: [
        { header: "Vehicle Number", dataKey: "vehicleNumber" },
        { header: "Driver Name", dataKey: "driverName" },
        { header: "Driver City", dataKey: "driverCity" },
        { header: "Telephone Number", dataKey: "telephoneNo" },
        { header: "Email Address", dataKey: "emailAddress" },
      ],
      body: vehicles.map((vehicle) => ({
        vehicleNumber: vehicle.vehicleNumber,
        driverName: vehicle.driverName,
        driverCity: vehicle.driverCity,
        telephoneNo: vehicle.telephoneNo,
        emailAddress: vehicle.emailAddress,
      })),
    });
    doc.save("vehicles.pdf");
  };*/

  const columns = [
    {
      title: "Vehicle Name",
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
      dataField: "telephoneNo",
      key: "telephoneNo",
    },
    {
      title: "Email Address",
      dataField: "emailAddress",
      text: "emailAddress",
    },
    {
      title: "Update",
      key: "update",
      dataIndex: "update",
      render: (record) => (
        <>
          <Button
            onClick={async (e) => {
              setSelectedRecord(record);
              setVehicleNumber(record.vehicleNumber);
              setDriverName(record.driverName);
              setDriverCity(record.driverCity);
              setTelephoneNo(record.telephoneNo);
              setEmailAddress(record.emailAddress);
              setSelectedId(record._id);
              form.setFieldsValue({
                email: emailAddress,
                "vehicle-number": vehicleNumber,
                "driver-city": driverCity,
                "driver-name": driverName,
                telephoneNo: telephoneNo,
              });

              setUpdateModalOpen(true);
            }}
            key={"update"}
          >
            Update
          </Button>
        </>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      dataIndex: "delete",
      render: (record) => (
        <>
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
                  await axios.delete(
                    "http://localhost:8070/Vehicle/" + record._id
                  );
                  await axios
                    .get("http://localhost:8070/Vehicle/0/0")
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
        </>
      ),
    },
  ];
/*
  const handleEdit = (record) => {
    setSelectedRecord(record);
    setSelectedId(record.id);
    setVehicleNumber(record.vehicleNumber);
    setDriverName(record.driverName);
    setDriverCity(record.driverCity);
    setTelephoneNo(record.telephoneNo);
    setEmailAddress(record.emailAddress);
    setUpdateModalOpen(true);
  };

  const handleDelete = async (record) => {
    await axios
      .delete("http://localhost:8070/Vehicle/" + record.id)
      .then((value) => {})
      .catch((err) => {
        console.log("delete vehicle failed " + err);
      });
    await axios
      .get("http://localhost:8070/Vehicle/0/0")
      .then((value) => {
        setVehicles(value.data.vehicles);
      })
      .catch((err) => {
        console.log("get vehicles failed " + err);
      });
  };
  */

  return (
    <div>
      <h1
          style={{
            color: "black",
            fontFamily: "Times new roman",
            fontWeight: "bold",
          }}
        >
          DashBoard {">"} Branches
        </h1>
        
        <Search
          placeholder="input search text"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 200 }}
          className="search-input"
        />
      <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
        Add Vehicle
      </Button>
      <Table
        columns={columns}
        dataSource={vehicles.filter((vehicle) =>
          vehicle.brLocation.toLowerCase().includes(searchText.toLowerCase())
        )}
      />
      <Modal
      width={1000}
      open={isModalOpen}
      style={{ backgroundColor: "grey", borderRadius: 5 }}
        title="Add Vehicle"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} autoComplete="false">
          <Form.Item
            label="Vehicle Number"
            name="vehicleNumber"
            rules={[
              {
                required: true,
                message: "Please input the vehicle number!",
              },
            ]}
          >
            <Input
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Driver Name"
            name="driverName"
            rules={[
              {
                required: true,
                message: "Please input the driver name!",
              },
            ]}
          >
            <Input
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Driver City"
            name="driverCity"
            rules={[
              {
                required: true,
                message: "Please input the driver cuty!",
              },
            ]}
          >
            <Input
              value={driverCity}
              onChange={(e) => setDriverCity(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Telephone Number"
            name="telephoneNumber"
            rules={[
              {
                required: true,
                message: "Please input the telephone number!",
              },
              {
                pattern: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit telephone number!",
              },
            ]}
          >
            <Input
              value={telephoneNo}
              onChange={(e) => setTelephoneNo(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="emailAddress"
            rules={[
              {
                required: true,
                message: "Please input the email address!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
      width={1000}
      open={isUpdateModalOpen}
      style={{ backgroundColor: "grey", borderRadius: 5 }}
        title="Update Branch"
        visible={isUpdateModalOpen}
        onOk={update}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item
            label="Vehicle Number"
            name="vehicleNumber"
            rules={[
              {
                required: true,
                message: "Please input the vehicle number!",
              },
            ]}
          >
            <Input
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Driver Name"
            name="driverName"
            rules={[
              {
                required: true,
                message: "Please input the driver name!",
              },
            ]}
          >
            <Input
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Driver City"
            name="driverCity"
            rules={[
              {
                required: true,
                message: "Please input the driver cuty!",
              },
            ]}
          >
            <Input
              value={driverCity}
              onChange={(e) => setDriverCity(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Telephone Number"
            name="telephoneNumber"
            rules={[
              {
                required: true,
                message: "Please input the telephone number!",
              },
              {
                pattern: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit telephone number!",
              },
            ]}
          >
            <Input
              value={telephoneNo}
              onChange={(e) => setTelephoneNo(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="emailAddress"
            rules={[
              {
                required: true,
                message: "Please input the email address!",
              },
              {
                type: "email",
                message: "Please enter a valid email address!",
              },
            ]}
          >
            <Input
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default driverSchedule;
