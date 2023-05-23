import React, { useEffect, useState } from 'react'
import Header from '../../Common/header'
import Footer from '../../Common/footer'
import BlogList from './BlogList'
import { Button, Card, Form } from 'react-bootstrap'
import UploadImageService from '../../Services/UploadImageService'
import axios from 'axios'
import Loading from '../../Common/Loading'
import { useParams } from 'react-router-dom'

const AddBlog = () => {
    const params = useParams()
    const id = params.id
    const [blog, setBlog] = useState(null)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("")
    const [image, setImage] = useState(null)
    const [shouldLoad, setShouldLoad] = useState(false)

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleContentChange = (event) => setContent(event.target.value);
    const handleImageChange = (e) => setImage(e.target.value)
    const handleType = (e) => setType(e.target.value)
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (image !== null && image !== undefined) {
            setShouldLoad(true)
            UploadImageService.uploadImage(image).then(async (url) => {
                const data = {
                    createBy: "currentUser",
                    name: title,
                    type: type,
                    description: content,
                    image: url
                }

                if (id == null) {
                    await axios.post("http://localhost:8070/post/add", data).then(val => {
                        console.log(val);
                        alert("Post added successfully")
                    }).catch(err => {
                        console.log("error " + err)
                    })
                } else {
                    await axios.put("http://localhost:8070/post/update/" + blog._id, data).then(val => {
                        console.log(val);
                        alert("Post updated successfully")
                    }).catch(err => {
                        console.log("error " + err)
                    })
                }

                setTitle("");
                setContent("");
                setImage(null)
                setShouldLoad(false)
            })
        } else {
            if (id != null) {
                const data = {
                    createBy: "currentUser",
                    name: title,
                    type: type,
                    description: content,
                }
                await axios.put("http://localhost:8070/post/update/" + blog._id, data).then(val => {
                    console.log(val);
                    alert("Post updated successfully")
                }).catch(err => {
                    console.log("error " + err)
                })
            } else {
                console.log("image is null")
                alert("Please pick an image")
            }
        }


    };

    if (shouldLoad) {
        return <Loading />
    }


    useEffect(() => {
        if (id != null) {
            axios.get(`http://localhost:8070/post/get/${id}`).then((value) => {
                setBlog(value.data.user)
                setTitle(blog.name);
                setContent(blog.description);
            }).catch(err => {
                console.log("get post failed " + err)
            })
        }
    }, [])




    return (
        <div
            style={{
                width: "auto",
                display: "flex",
                flexDirection: "column",
                height: "auto",
                minHeight: "100vh"
            }}
        >
            <Header />
            <div
                style={{
                    flex: 1,
                    padding: "16px"
                }}
            >
                <Card
                    style={{
                        padding: "16px"
                    }}
                >
                    <Card.Title>
                        {id !== null ? "Edit Post" : "Add Blog Post"}
                    </Card.Title>
                    {id && blog && <Card.Img
                        style={{
                            width: "150px",
                            height: "200px"
                        }}
                        src={blog.image} />}
                    <Card.Body>
                        <Form

                        >

                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter title"
                                    defaultValue={blog && blog.name}
                                    onChange={handleTitleChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formType">
                                <Form.Label>Type</Form.Label>
                                <Form.Select
                                    placeholder="Enter Type"

                                    onChange={(e) => {
                                        setType(e.target.value)
                                        console.log(type)
                                    }}
                                >
                                    <option

                                        value={"Achivements"}
                                    >
                                        Achivements
                                    </option>
                                    <option
                                        value={"Upcomming Events"}
                                    >
                                        Upcomming Events
                                    </option>
                                    <option
                                        value={"General"}
                                    >
                                        General
                                    </option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="formContent">
                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Enter content"
                                    defaultValue={blog && blog.description}
                                    onChange={(e) => {
                                        setContent(e.target.value)
                                    }}
                                />
                            </Form.Group>
                            <Form.Group controlId="formImage">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    placeholder="Pick an Image"
                                    onChange={(e) => { setImage(e.target.files[0]) }}
                                />
                            </Form.Group>


                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <Button
                            onClick={handleSubmit}
                        >
                            {id != null ? "Edit Blog" : "Add Blog"}
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
            <Footer />
        </div>
    )
}

export default AddBlog