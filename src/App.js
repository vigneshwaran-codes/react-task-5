import './App.css'
import React, { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Route, Link, Switch } from 'react-router-dom'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import About from './components/About'
import Post from './components/Post'
import Update from './components/Update'
import Profile from './components/Profile'
import Users from './components/Users'
import EditProfile from './components/EditProfile'
import axios from 'axios'

export default function App () {
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])

  // Get Data
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setData(response.data)
    })
  }, [])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='App'>
      <Navbar expand='lg' bg='light' variant='light' sticky='Top'>
        <Container>
          <Nav>
            <Navbar.Brand as={Link} to='/'>
              Poster
            </Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/posts'>
              Posts
            </Nav.Link>
            <Nav.Link as={Link} to='/users'>
              Users
            </Nav.Link>
            <Nav.Link as={Link} to='/addpost'>
              Add Post
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/posts'>
          <Posts data={data} setData={setData} />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/users'>
          <Users users={users} />
        </Route>
        <Route exact path='/profile'>
          <Profile users={users} />
        </Route>
        <Route exact path='/profile/update'>
          <EditProfile users={users} />
        </Route>
        <Route exact path='/addpost'>
          <AddPost data={data} setData={setData} />
        </Route>
        <Route exact path='/posts/:id'>
          <Post />
        </Route>
        <Route exact path='/Update/:id'>
          <Update />
        </Route>
      </Switch>
    </div>
  )
}
