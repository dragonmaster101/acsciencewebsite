import React from "react";
import {Stack , Form , Button} from "react-bootstrap";
import "styled-jsx";

import "./post.css"

export default function CreatePost(props) {
    const [title , setTitle] = React.useState(false);
    const [date , setDate] = React.useState(false);
    const [author , setAuthor] = React.useState(false);
    const [url , setUrl] = React.useState(false);
    const [description  , setDescription] = React.useState(false);
    

    return (
        <Stack className="createPost-root">
            <style jsx>
                {`
                    .createPost-btn {
                        padding-left: 2%;
                        padding-right: 2%;
                        font-size: x-large;
                    }
                `}
            </style>
            <Form>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="input" placeholder="Epic Project" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="email" placeholder="elon musk" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Video url</Form.Label>
                    <Form.Control type="email" placeholder="Link to your project's youtube video" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} maxLength={32}/>
                </Form.Group>

                <Button variant="flat" className="createPost-btn">
                    Post
                </Button>

            </Form> 

        </Stack>
    )
}