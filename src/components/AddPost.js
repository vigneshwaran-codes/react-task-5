import React, { useState } from 'react'
import AddPostImg from '../assets/addpost.svg'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function AddPost ({ data, setData }) {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const history = useHistory()

  const addPost = async (e) => {
    e.preventDefault()
    await axios.post('https://jsonplaceholder.typicode.com/posts', {
      id,
      title,
      body
    })
      .then(response => console.log(response))
      .then(response => console.log(setData([...data, { id: id, title: title, body: body }])))
      .catch(err => console.log(err))
    setId('')
    setTitle('')
    setBody('')
    history.push('/posts')
  }

  return (
    <div className='add_post'>
      <h1>Create Post</h1>
      <img src={AddPostImg} alt='add post' className='add_post-img' />
      <FloatingLabel
        controlId='floatingInput'
        label='Post id'
        className='mb-4'
      >
        <Form.Control type='number' placeholder='Enter ID' value={id} onChange={(e) => { setId(e.target.value) }} required />
      </FloatingLabel>
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
        onClick={addPost}
      >
        Add Post
      </Button>
    </div>
  )
}

export default AddPost
