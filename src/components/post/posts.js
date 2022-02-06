import {useState , useEffect} from "react"

import { Post } from "./post"

import {Container , Row , Col , InputGroup , FormControl , Button} from "react-bootstrap"
import {BsSearch} from "react-icons/bs"

import "./post.css"


function getPosts(website , setter){
    fetch(website + "/posts" , {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    }).then(resp => {
        resp.json().then(val => {
            let results = []
            for (let i=0;i < val.posts.length;i++) {
                results.push((
                    <Col mg="auto">
                        <Post data={val.posts[i]} card={true}/>
                    </Col>
                ))
            }
            setter(results);
        })
    }).catch(err => alert(err))
}

function printPost(post) {
    alert(post.title + "/n" + post.author + "/n" + post.date + "/n" + post.url + "/n" + post.description)
}

export default function Posts(props){
    const [postsData , setPostsData] = useState(false);

    useEffect(() => {
        getPosts("http://localhost:8080" , setPostsData);
    }, []);

    return (
        <div className="posts-Header">
            <h1 className="posts-Title">Projects</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default"><BsSearch /></InputGroup.Text>
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
                <Button variant="flat">search</Button>
            </InputGroup>
            <div className="posts-Body">
                <Container fluid className="posts-Container">
                    <Row>
                        {postsData}
                    </Row>
                </Container>
            </div>
        </div>
    )
}