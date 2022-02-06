import React  , {useCallback} from "react";
import {useNavigate} from 'react-router-dom';

import ReactPlayer from "react-player/youtube";
import { Card , Button } from 'react-bootstrap'

import {BiArrowBack} from "react-icons/bi"


import "./post.css"
import "./style.scss"
import "styled-jsx"

import extract from "./extract";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
    width,
    height
    };
}

function GetPostById(id , setter){
    fetch("https://science-web-api.herokuapp.com/post/id/" + id , {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    }).then(resp => {
        resp.json().then(val => {
            setter(<Post data={val}/>);
        })
    }).catch(err => alert(err))
}

export function PostById(props) {
    const [postbyid , setPost] = React.useState(false);
    React.useEffect(() => GetPostById(props.id, setPost) , [])

    return (
        <div>
            {postbyid}
        </div>
    )
}

export function Post(props){
        // let {width , height} = getWindowDimensions();
        const { innerWidth: width, innerHeight: height } = window;
        let bh = height * 60/100;

        const handleBackClick = useNavigate();
        if (!props.card){
            return (
                <div className="post-Post-root">
                    <style jsx>
                        {`
                        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@300;400&family=Lato:wght@300;400;700&display=swap');

                        h1 { color: #ffffff; font-family: 'Lato', sans-serif; font-size: 400%; font-weight: 300; line-height: 58px; margin: 0 0 58px; }

                        h2 { color: #ffffff; font-family: 'Lato', sans-serif; font-size: 200%; font-weight: 300; line-height: 58px; margin: 0 0 58px; }


                        p { color: #adb7bd; font-family: 'Lucida Sans', Arial, sans-serif; font-size: 16px; line-height: 26px; text-indent: 30px; margin: 0; }


                        a { color: #fe921f; text-decoration: underline; }


                        a:hover { color: #ffffff }

                        .player-wrapper {
                            width: 100%; 
                            height: 100%; 
                        }
                        .react-player {
                        position: relative;
                        height: 50%; 
                        }
                        


                        .date { background: #fe921f; color: #ffffff; display: inline-block; font-family: 'Lato', sans-serif; font-size: 12px; font-weight: bold; line-height: 12px; letter-spacing: 1px; margin: 0 0 30px; padding: 10px 15px 8px; text-transform: uppercase; }

                        .dTitle {
                            margin-top: 2%;
                        }


                        `}
                    </style>
                    <Button 
                    style={{
                        backgroundColor: "white" , color: "black" , borderStyle: "none" , 
                        marginBottom: 20 , padding: 20
                    }}
                    onClick={() => handleBackClick('/')}
                    >
                        <BiArrowBack /></Button>
                    <h1>{props.data.title}</h1>
                    <h2>{"By " + props.data.author}</h2>
                    <div className="date">{props.data.date}</div>
                    
                    <div style={{height: bh}} className="player-wrapper">
                        <ReactPlayer
                            className="react-player"
                            url={props.data.url}
                            width="80%"
                            height="100%"
                            controls={false}
                        />
                    </div>
                    <h1 className="dTitle">Description</h1>
                    <p>{props.data.description}</p>
                </div>
            )
        }
        else {
            return PostCard(props);
        }
}

function PostCard(props){
    let imgSrc = extract(props.data.url);
    // React.useEffect(() => {
    //     // GET request using fetch inside useEffect React hook
    //     fetch('https://api.npms.io/v2/search?q=react')
    //         .then(response => response.json())
    //         .then(data => alert(data.total));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/post/id/' + props.data.id, {replace: true}), [navigate , props.data.id]);


    return (
        <div>
            <style type="text/css">
                {`
                .btn-flat {
                    font-family: 'Quicksand', sans-serif;
                    background-color: #fe921f;
                    color: white;
                }
                .btn-flat:hover {
                    background-color: #e2821b;
                    color: white;
                }

                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                }
                `}
            </style>
        <Card className="post-Card">
            <Card.Img variant="top" src={imgSrc}/>
            <Card.Body>
            <Card.Title className="post-title">{props.data.title}</Card.Title>
            <Card.Subtitle className="post-subtitle-author">{"By " + props.data.author}</Card.Subtitle>
            <Card.Subtitle className="post-subtitle">{props.data.date}</Card.Subtitle>
            <Card.Text className="post-description">{props.data.description}</Card.Text>
            <Button variant="flat" onClick={handleOnClick}>Read More</Button>
            </Card.Body>
        </Card>
        </div>
    )
}