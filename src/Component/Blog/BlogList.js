import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./BloList.css"


const BlogList = ({ items }) => {

    const navigate = useNavigate()

    return (
        <div
            style={{
                padding: "24px"
            }}
        >
            <Container>
                <Row>
                    {items.map((post) => (
                        <Col sm={12} md={6} lg={4} key={post._id}>
                            <Card style={{
                                marginBottom: '20px',
                                cursor: "pointer",
                                height: "150px"
                            }}
                                onClick={(e) => {
                                    navigate(`${post._id}`)
                                }}
                            >
                                <Card.Img variant="top" src={post.image} />
                                <Card.Body>
                                    <Card.Title>{post.name}</Card.Title>
                                        {/* <Card.Text
                                            className = "clamp-text"
                                        >{post.description}</Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default BlogList