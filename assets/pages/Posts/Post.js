import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    let params = useParams()
    return (
        <p>This is post with id {params.postId}</p>
    )
}

export default Post