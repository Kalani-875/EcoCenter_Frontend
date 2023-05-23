import React, { useEffect, useState } from 'react'
import Header from '../../Common/header'
import CategoryButton from '../../Common/CategoryButton'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import navigate from 'navigate';
import axios from 'axios';
import BlogList from './BlogList';
import BlogPostsTable from './BlogPostTable';


const BlogContainer = () => {
    const activeColor = "#1da7d1";
    const detactiveColor = "#43484a"
    const [selectedCategory, setSelectedCategory] = useState('upcomming-events');
    const [blog, setBlogs] = useState([])
    const navigator = useNavigate()

    

    useEffect(() => {
        axios.get("http://localhost:8070/post/").then((val) => {
            setBlogs(val.data)
        }).catch(err => {
            console.log("get posts failed " + err)
        })
    }, [])


    return (
        <div
            style={{
                width: "auto",
                height: "auto",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Header />
            <div
                style={{
                    width: "100vw",
                    height: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "0 16px"
                }}
            >
                <div
                    style={{
                        width: "auto",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <CategoryButton title={"Upcomming Events"} onClick={(e) => {
                        setSelectedCategory('upcomming-events')
                    }} color={
                        selectedCategory === "upcomming-events" ? activeColor : detactiveColor
                    } />
                    <CategoryButton title={"Achivements"} onClick={(e) => {
                        setSelectedCategory('achivements')
                    }} color={
                        selectedCategory === "achivements" ? activeColor : detactiveColor
                    } />
                    <CategoryButton title={"General"} onClick={(e) => {
                        setSelectedCategory('general')
                    }} color={
                        selectedCategory === "general" ? activeColor : detactiveColor
                    } />
                    <Button
                        style={{
                            backgroundColor: '#08a64d',
                            margin: "0 16px",
                            border: "1px solid #08a64d"
                        }}
                        onClick={(e) => {
                            navigator("/add-blog")
                        }}
                    >
                        Add Blog
                    </Button>
                    <Button
                        style={{
                            backgroundColor: '#08a64d',
                            margin: "0 16px",
                            border: "1px solid #08a64d"
                        }}
                        onClick={(e) => {
                            navigator("/blog-list")
                        }}
                    >
                        Posts List
                    </Button>
                </div>
            </div>
            <BlogList items={
                blog
            }/>
          
        </div>
    )
}

export default BlogContainer