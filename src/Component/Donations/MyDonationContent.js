import React, { useEffect, useState } from 'react'
import Header from '../../Common/header'
import Footer from '../../Common/footer'
import axios from 'axios'
import { Button, Form, Modal, Table } from 'react-bootstrap'

const MyDonationContent = () => {
    const [donations, setDonations] = useState([])
    const [show, setShow] = useState(false);
    const [selectedDonation, setSelectedDonation] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [donationAmount, setDonationAmount] = useState('');
    const [donationReason, setDonationReason] = useState('');
    useEffect(() => {
        axios.get("http://localhost:8070/Donation").then((val) => {
            setDonations(val.data)
            //setDonations(donations.map((donation) => donation.createdBy === "currentUser"))

        }).catch(err => {
            console.log("get donate list failed " + err)
        })
    }, [])

    const handleUpdate = (donate) => {
        setSelectedDonation(donate)
        handleShow()
    }

    const handleDelete = (donate) => {
        axios.delete("http://localhost:8070/Donation/delete/" + donate._id).then((val) => {
            alert("deleted succefully")
            window.location.reload()
        })
    }
    return (
        <div>
            <Header />
            <Table>
                <tr>
                    <th>
                        Donated To
                    </th>
                    <th>
                        Donated Amount
                    </th>
                    <th>
                        Donated Reason
                    </th>
                    <th>

                    </th>
                </tr>
                {
                    donations.map((donate) => {
                        return <tr
                            key={donate._id}
                        >
                            <td>{donate.Dvenue} </td>
                            <td> {donate.amount}</td>
                            <td> {donate.Ddescription}</td>
                            <td>
                                {!donate.status && <Button style={{ marginBottom: "4px", color: "black" }} variant="primary" onClick={() => handleUpdate(donate)}>Update</Button>}

                                <Button style={{ color: "black" }} variant="danger" onClick={() => handleDelete(donate)}>Delete</Button>

                            </td>


                        </tr>
                    })
                }
            </Table>
            <Footer />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Donation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Donation Amount</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={selectedDonation && selectedDonation.amount}
                                onChange={e => setDonationAmount(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Reason for Donation</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                defaultValue={selectedDonation && selectedDonation.Ddescription}
                                onChange={e => setDonationReason(e.target.value)}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={async () => {
                        const data = {
                            amount: donationAmount,
                            Ddescription: donationReason,
                            status: true,
                        }
                        await axios.put(`http://localhost:8070/Donation/update/${selectedDonation._id}`, data).then(val => {
                            alert("Donation updated sucesfully");
                            window.location.reload()
                        }).catch(err => {
                            console.log("update donation failed " + err)
                        })
                        handleClose()
                    }}>
                        Donate Now
                    </Button>
                    <Button variant="primary" onClick={async () => {
                        const data = {
                            amount: donationAmount,
                            Ddescription: donationReason,
                            status: false,
                        }
                        await axios.put(`http://localhost:8070/Donation/update/${selectedDonation._id}`, data).then(val => {
                            alert("Donation updated sucesfully");
                            window.location.reload()
                        }).catch(err => {
                            console.log("update donation failed " + err)
                        })
                        handleClose()
                    }}>
                        Donate Later
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MyDonationContent