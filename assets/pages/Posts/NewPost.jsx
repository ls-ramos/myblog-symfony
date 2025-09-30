import axios from 'axios';
import React, { useState } from 'react';

function NewPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>
      <p>This is the page to make a post</p>
      <label htmlFor="title">
        Title:
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label htmlFor="description">
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button
        onClick={() => {
          axios.post('http://localhost:8080/api/post/create', {
            title, description,
          });
        }}
        type="button"
      >
        Create

      </button>
    </div>
  );
}

export default NewPost;
