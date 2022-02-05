import {useState , useEffect} from "react"
import { Post } from "./post"
import {Container , Row , Col } from "react-bootstrap"


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
        <div>
            <Container fluid style={{margin: 20}}>
                <Row>
                    {postsData}
                </Row>
            </Container>
        </div>
    )
}