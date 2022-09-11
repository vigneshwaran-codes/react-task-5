import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


function Profile ({ users }) {
  const history = useHistory()
  return (
    <div>
      <h1>Welcome to Profile</h1>
      {
        users.map(profile =>
          <div className='profile-info'>
          <div className='profile-sidebar'>
            <h3>Username: </h3>
            <br />
            <p>{profile.name}</p>
            <h3> Bio: </h3>
            <br />
            <p>Connect with {profile.username} at {profile.email}</p>
            <Button variant='info' size='lg' onClick={() => history.push('/profile/update')}>Edit Profile</Button>
          </div>
          <div>
            <Card className='profile-info-card'>
              <Card.Body>
                  <h2>More Information</h2>
                  <br />
                  <h3>Address:</h3>
                  <p>{profile.address.street} , {profile.address.city}
                  <br />
                  - {profile.address.zipcode}
                </p>
                  <h3>Phone Number:</h3>
                  <p>{profile.phone}</p>
                  <br />
                  <h3>Website :</h3>
                  <p>{profile.website}</p>
                </Card.Body>
            </Card>
            <hr />
          </div>
        </div>
        )
}
    </div>
  )
}

export default Profile
