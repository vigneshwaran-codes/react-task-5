import React, { useState } from 'react'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function EditProfile ({ users }) {
  const history = useHistory()
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [user, setUser] = useState([])

  const UpdateProfile = async (e, id) => {
    e.preventDefault()
    await axios.post('https://jsonplaceholder.typicode.com/users/' + id, {
      id,
      name,
      bio,
      username,
      email,
      address,
      website,
      phone
    })
      .then(response => console.log(response))
      .then(response => console.log(setUser([...user, { id: id, name: name, bio: bio, username: username, email: email, address: address, website: website, phone: phone }])))
      .catch(err => console.log(err))
    setId('')
    setName('')
    setBio('')
    setUserName('')
    setAddress('')
    setEmail('')
    setPhone('')
    setWebsite('')
    history.push('/profile')
  }

  return (
    <div className='add_post'>
      <h1>Update Profile</h1>
      <FloatingLabel
        controlId='floatingInput'
        label='id'
        className='mb-4'
      >
        <Form.Control type='number' placeholder='Enter ID' value={id} onChange={(e) => { setId(e.target.value) }} required />
      </FloatingLabel>
      <FloatingLabel
        controlId='floatingInput'
        label='name'
        className='mb-4'
      >
        <Form.Control type='text' placeholder='Enter title' value={name} onChange={(e) => { setName(e.target.value) }} required />
      </FloatingLabel>
      <FloatingLabel
        controlId='floatingTextarea'
        label='Bio'
        className='mb-4'
      >
        <Form.Control as='textarea' value={bio} onChange={(e) => { setBio(e.target.value) }} required style={{ height: '100px' }} />
      </FloatingLabel>
      <FloatingLabel
        controlId='floatingInput'
        label='username'
        className='mb-4'
      >
        <Form.Control type='text' placeholder='Enter username' value={username} onChange={(e) => { setUserName(e.target.value) }} required />
      </FloatingLabel>
      <FloatingLabel
        controlId='floatingInput'
        label='address'
        className='mb-4'
      >
        <Form.Control type='text' placeholder='Enter address' value={address} onChange={(e) => { setAddress(e.target.value) }} required />
      </FloatingLabel>
      <FloatingLabel
        controlId='floatingInput'
        label='phone'
        className='mb-4'
      >
        <Form.Control type='number' placeholder='Enter phone' value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
      </FloatingLabel>
      <FloatingLabel
        controlId='floatingInput'
        label='website'
        className='mb-4'
      >
        <Form.Control type='text' placeholder='Enter website' value={website} onChange={(e) => { setWebsite(e.target.value) }} required />
      </FloatingLabel>
      <Button
        disabled={(!name, !username, !email, !address, !phone, !website, !bio)}
        type='submit'
        variant='success'
        onClick={() => UpdateProfile}
      >
        Save Changes
      </Button>
    </div>
  )
}

export default EditProfile
