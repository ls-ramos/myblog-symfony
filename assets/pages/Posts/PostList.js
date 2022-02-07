import React from 'react'
import { Link } from 'react-router-dom'

const PostList = () => {
    return (
        <div>
            <Link to='/post/new'>New post</Link>
            <Link to={`/post/${100}`}>Look post</Link>
            <p>This is the post list</p>
        </div>
    )
}

export default PostList