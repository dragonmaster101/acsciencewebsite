import React from "react";
import ReactPlayer from "react-player/youtube";
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
                    <h1>{props.title}</h1>
                    <h2>{"By " + props.author}</h2>
                    <div className="date">{props.date}</div>
                    
                    <div style={{height: bh}} className="player-wrapper">
                        <ReactPlayer
                            className="react-player"
                            url={props.url}
                            width="80%"
                            height="100%"
                            controls={false}
                        />
                    </div>
                    <h1 className="dTitle">Description</h1>
                    <p>{props.description}</p>
                </div>
            )
        }
        else {
            return PostCard(props);
        }
}

function PostCard(props){
    let imgSrc = extract(props.url);
    React.useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => alert(data.total));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div>
        <style jsx>
            {`
            @import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');
            @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
            .container{
                display: flex;
                border-color: white;
                justify-content: center;
                padding: 80px;
            }
            
            .square:hover {
                -webkit-transform: translate(20px, -10px);
                -ms-transform: translate(10px, -10px);
                transform: translate(10px, -10px);
                -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            
            }
            
            
            .square{
                width: 460px;
                height: 430px;
                padding-right: 3px;
                background: white;
                border-radius: 4px;
                -webkit-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease; 
            }
            
            .mask{
                clip: rect(0px, 460px, 220px, 0px);
                border-radius: 4px;
                position: absolute;
            }
            
            img{
                width: 460px;
                border-style: solid;
                border-color: white;
            }
            
            .h1{
                margin: auto;
                text-align: left;
                margin-top: 240px;
                padding-left: 30px;
                
                font-family: 'Montserrat', sans-serif;
                font-size: 24px;
            }
            p{
                text-align: justify; 
                padding-left: 30px;
                padding-right: 30px;
                font-family: 'Open Sans', sans-serif;
                font-size: 12px;
                color: #C8C8C8;
                line-height: 18px;
            }
            
            .button {
                background-color: #fe921f;
                color: white;
                width: 90px;
                padding: 10px 18px;
                border-radius: 3px;
                text-align: center;
                text-decoration: none;
                display: block;
                margin-top: 20px;
                margin-left: 30px;
                margin-right: 70px;
                font-size: 12px;
                cursor: pointer;
                font-family: 'Montserrat' , sans-serif;
            }
            `}
        </style>
        <div className="container">
            <div className="square">
            <img src={imgSrc} className="mask" alt={props.Title + " image"}/>
            <div className="h1">{props.title}</div>
            
                <p>{props.description}</p>
                <div>
                    <a href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261" target="_" className="button">Read More</a>
                </div>
            </div>
        </div>
        </div>
    )
}