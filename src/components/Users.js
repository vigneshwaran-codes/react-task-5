import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai'
import { IoEyeOutline } from 'react-icons/io5'

function Users ({ users }) {
  const history = useHistory()
  return (
    <div>
      <div>
        <h1 className='user-heading'>Users</h1>
        {
                users.map((user, index) => {
                  return (
                    <div className='blog-card' key={user.id}>
                      <Card key={index} style={{ width: '780px' }} className='card-container'>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Body>{user.email} {' '} {user.company.name}</Card.Body>
                        <div className='card-btn'>
                          <Button variant='danger'><AiOutlineDelete /></Button>
                          <Button onClick={() => history.push('/profile')} variant='info'><IoEyeOutline /></Button>
                        </div>
                      </Card>
                    </div>
                  )
                })
        }
      </div>
    </div>
  )
}

export default Users
