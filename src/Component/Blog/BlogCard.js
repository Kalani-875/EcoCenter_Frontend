import React, { useEffect, useState } from 'react'
import Header from '../../Common/header'
import Footer from '../../Common/footer'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DonationForm from '../Donations/DonationForm'

const BlogCard = () => {
  const [blog, setBlog] = useState(null)
  const params = useParams()
  const id = params.id;

  useEffect(() => {
    axios.get(`http://localhost:8070/post/get/${id}`).then((value) => {
      setBlog(value.data.user)
    }).catch(err => {
      console.log("get post failed " + err)
    })
  }, [id])
  return (
    <div>
      <Header />
      {blog && <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between"
      }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            height: "auto",
            justifyContent: "flex-start",
            padding: "16px"
          }}
        >
          <h1>{blog.name}</h1>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flex: 1,
          }}
        >

          <div
            style={{
              flex: 1,
              height: "100%"
            }}
          >
            <img src={blog.image} />
          </div>
          <div
            style={{
              flex: 2,
              height: "100%",
              padding: "0 16px"
            }}
          >
            {blog.description}
          </div>
          <div
            style={{
              flex: 1,
              height: "100%",
              padding: "0 16px"
            }}
          >
            {blog && <DonationForm id={blog._id} />}
          </div>
        </div>
      </div>}
      <Footer />
    </div>
  )
}

export default BlogCard