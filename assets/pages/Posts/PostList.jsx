import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('http://localhost:8080/api/post/get');
      const postsData = response?.data;

      setPosts(postsData);
    };

    getPosts().catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Link to="/post/new">New post</Link>
      <Link to={`/post/${100}`}>Look post</Link>
      {
        posts && posts.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))
      }
    </div>
  );
};

export default PostList;
