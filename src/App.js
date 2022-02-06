import './App.css';


import Posts from "./components/post/posts"
import PostForm from "./components/post/createPost"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <div className="">
          <PostForm></PostForm>
          <Posts />
      </div>
  );
}

export default App;
