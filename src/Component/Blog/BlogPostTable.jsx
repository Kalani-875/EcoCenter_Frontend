import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import Header from '../../Common/header';
import Footer from '../../Common/footer';
import "./BloList.css"
import { useNavigate } from 'react-router-dom';
import { jsPDF } from "jspdf";

const BlogPostsTable = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8070/post/").then((val) => {
            setPosts(val.data)
        }).catch(err => {
            console.log("get posts failed " + err)
        })
    }, [])

    const handleUpdate = (post) => {
        navigate(`/edit-blog/${post._id}`)
    }

    const handleDelete = async (post) => {
        await axios.delete(`http://localhost:8070/post/delete/${post._id}`).then(val => {
            window.location.reload()
        }).catch(err => {
            console.log("delete post failed " + err)
        })
    }

    const generatePdf = () => {
        const doc = new jsPDF();

        let y = 10; // vertical offset for text placement

        posts.forEach((post, i) => {
            doc.text(`Created By: ${post.createBy}`, 10, y);
            doc.text(`Name: ${post.name}`, 10, y + 10);
            doc.text(`Type: ${post.type}`, 10, y + 20);
            doc.text(`Description: ${post.description}`, 10, y + 80);
            // Note: images require further handling, e.g. converting to base64 format
            doc.text(`Created At: ${new Date(post.createAt).toLocaleDateString()}`, 10, y + 40);

            y += 50; // increment vertical offset each time
        });

        // Save the PDF
        doc.save('posts.pdf');
    };

    return (
        <div
            style={{
                padding: "8px",
            }}
        >
            <Header />
            <div>
                <Button
                    onClick={generatePdf}
                >
                    Generate PDF
                </Button>
            </div>
            <Container>
                {posts && <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Created By</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Created At</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post._id}>
                                <td>{post.createBy}</td>
                                <td>{post.name}</td>
                                <td>{post.type}</td>
                                <td
                                    className='clamp-text'
                                >{post.description}</td>
                                <td>
                                    <img src={post.image} alt={post.name} style={{ width: '50px', height: '50px' }} />
                                </td>
                                <td>{new Date(post.createAt).toLocaleDateString()}</td>
                                <td>
                                    <Button style={{ marginBottom: "4px" }} variant="primary" onClick={() => handleUpdate(post)}>Update</Button>{' '}
                                    <Button variant="danger" onClick={() => handleDelete(post)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>}
            </Container>
            <Footer />
        </div>
    );
};

export default BlogPostsTable;
