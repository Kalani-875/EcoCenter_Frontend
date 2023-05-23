import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const DonationForm = ({ id }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [donationAmount, setDonationAmount] = useState('');
    const [donationReason, setDonationReason] = useState('');

    const handleSubmit = async (event, status) => {
        event.preventDefault();
        const data = {
            createBy: "currentUser",
            Dname: "currentUser",
            Dvenue: id,
            Ddescription: donationReason,
            status: status,
            amount: donationAmount,
        }
        await axios.post("http://localhost:8070/Donation/add", data).then((val) => {
            setCardNumber("")
            setExpiryDate("")
            setCvv("")
            setDonationAmount("")
            setDonationReason("")
            alert("Donated successfully")

        }).catch(err => {
            console.log("create post failed " + err)
        })
    };

    return (
        <Card>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                            type="text"
                            value={cardNumber}
                            onChange={e => setCardNumber(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                            type="text"
                            value={expiryDate}
                            onChange={e => setExpiryDate(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                            type="text"
                            value={cvv}
                            onChange={e => setCvv(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Donation Amount</Form.Label>
                        <Form.Control
                            type="number"
                            value={donationAmount}
                            onChange={e => setDonationAmount(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Reason for Donation</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={donationReason}
                            onChange={e => setDonationReason(e.target.value)}
                        />
                    </Form.Group>

                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <Button variant="primary" type="submit"
                            style={{
                                marginRight: "8px"
                            }}
                            onClick={(e) => {
                                handleSubmit(e, true)
                            }}
                        >
                            Donate Now
                        </Button>
                        <Button variant="primary" type="submit"
                            onClick={(e) => {
                                handleSubmit(e, false)
                            }}
                        >
                            Donate Later
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default DonationForm;
