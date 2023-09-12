import React, { useState } from "react";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript2", body: "Description" },
    { id: 3, title: "Javascript3", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />{" "}
      {/* <div>
        <MySelect/>
      </div> */}
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Список постов:" />
      ) : (
        <h1>Нет постов</h1>
      )}
    </div>
  );
}

export default App;
