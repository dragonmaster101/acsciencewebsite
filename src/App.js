import './App.css';

import React from "react";
import { PostById } from './components/post/post';
import Posts from "./components/post/posts"
import PostForm from "./components/post/createPost"

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams
} from "react-router-dom";

function PostIdRoute(props) {
  const id = useParams().id;

  return (
    <PostById id={id}/>
  )
}

function App() {

  return (
      <div className="">
          
          <Routes>
            <Route path="/" element={<Posts />}>
            </Route>
            <Route path="post/id/:id" element={<PostIdRoute />}/>
          </Routes>
      </div>
  );
}

export default App;
