import ReactLoading from "react-loading";
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
    const [query , setQuery] = useState(false);
    let [searchForm , setSearchForm] = useState(false);

    useEffect(() => {
        getPosts("http://localhost:8080" , setPostsData);
    }, []);

    searchForm = (
        <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                style={{padding: 10}}
                placeholder="enter author/title and click the search button"
                onChange={e => setQuery(e.target.value)}
                />
    );

    return (
        <div className="posts-Header">
            <h1 className="posts-Title">Projects</h1>
            <InputGroup className="posts-Search" style={{width: "90%" , marginLeft: "4%" , marginBottom: "2%"}}>
                <InputGroup.Text id="inputGroup-sizing-default"><BsSearch /></InputGroup.Text>
                
                {searchForm}


                <Button variant="flat" onClick={() => {
                    setPostsData(<ReactLoading 
                        type={"spin"} color={"white"} height={'10%'} width={'10%'} />)

                    fetch("http://localhost:8080/post/query/" + query , {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                        },
                    }).then(resp => {
                        console.log(resp)
                        if (resp.status === 669) {
                            setPostsData(<h1 style={{color: "white"}}>No Matching Results</h1>)
                            return;
                        }
                        resp.json().then(val => {
                            let results = []
                            for (let i=0;i < val.length;i++) {
                                results.push((
                                    <Col mg="auto">
                                        <Post data={val[i]} card={true}/>
                                    </Col>
                                ))
                            }
                            setPostsData(results);
                        })
                    }).catch(err => alert(err))

                }}>search</Button>


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