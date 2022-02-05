import React from "react";
import ReactPlayer from "react-player/youtube";
import { Card , Button } from 'react-bootstrap'

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

export function Post(props){
        // let {width , height} = getWindowDimensions();
        const { innerWidth: width, innerHeight: height } = window;
        let bh = height * 60/100;

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

    return (
        <div>
            <style type="text/css">
                {`
                .btn-flat {
                background-color: #fe921f;
                color: white;
                }

                .btn-xxl {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                }
                `}
            </style>
        <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={imgSrc}/>
            <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text>{props.data.description}</Card.Text>
            <Button variant="flat">Read More</Button>
            </Card.Body>
        </Card>
        </div>
    )
}