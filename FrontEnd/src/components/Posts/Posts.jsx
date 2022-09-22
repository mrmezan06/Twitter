import React from "react";
import "./Posts.css";
// import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.authData);
  const [posts, setPosts] = React.useState([]);

  const getTimelinePosts = async (id) => {
    const data = await axios.get(`http://localhost:5000/post/${id}/timeline`);
    setPosts(data.data);
  };

  useEffect(() => {
    getTimelinePosts(user?._id);
  }, [dispatch, user?._id]);

  return (
    <div className="Posts">
      {posts.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;

// 1:43:40
