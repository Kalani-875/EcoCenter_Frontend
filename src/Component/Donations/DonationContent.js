import React, { useEffect, useState } from 'react'
import Header from '../../Common/header'
import Footer from '../../Common/footer'
import axios from 'axios'

const DonationContent = () => {
    const [donations, setDonations] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8070/Donation").then((val) => {
            setDonations(val.data)
            
        }).catch(err => {
            console.log("get donate list failed " + err)
        })
    }, [])
    return (
        <div>
            <Header />

            <Footer />
        </div>
    )
}

export default DonationContent