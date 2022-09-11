import React, { useState } from 'react'
import axios from 'axios'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'

function Update ({data, setData}) {
  const history = useHistory()
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const updatePost = async (e, id) => {
    e.preventDefault()
     const { data } = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title,
      body
    })
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
      const posts = [...data]
      const postIndex = posts.findIndex(post => post.id === id)
      posts[postIndex] = data
      setData(posts)
    setTitle('')
    setBody('')
    history.push('/posts')
  }

  return (
    <div>
      <h1 className='update_post_txt'>Update Post</h1>
      <FloatingLabel
        controlId='floatingInput'
        label='Post title'
        className='mb-4'
      >
        <Form.Control type='text' placeholder='Enter title' value={title} onChange={(e) => { setTitle(e.target.value) }} required />
      </FloatingLabel>
      <FloatingLabel
        controlId='floatingTextarea'
        label='Post Body'
        className='mb-4'
      >
        <Form.Control as='textarea' value={body} onChange={(e) => { setBody(e.target.value) }} required style={{ height: '100px' }} />
      </FloatingLabel>
      <Button
        disabled={(!title, !body)}
        type='submit'
        onClick={() => updatePost(id)}
      >
        Update Post
      </Button>
    </div>
  )
}

export default Update