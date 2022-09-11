import React from 'react'
import postsLogo from '../assets/posts.svg'
import { Card, Button, Badge } from 'react-bootstrap'
import DeletePost from '../components/DeletePost'
import { useHistory } from 'react-router-dom'
import EditPost from './EditPost'

function Posts ({ data, setData }) {
  const history = useHistory()
  return (
    <div>
      <div>
        <h1 className='post-heading'>All Posts</h1>
        <Button variant='success' onClick={() => history.push('/addpost')} className='post-btn'>Add Post</Button>
        <br />
        <img src={postsLogo} alt='blog-posts' className='posts-img' />
        {
          data.length > 0
            ? (
                data.map((post, index) => {
                  return (
                    <div className='blog-card' key={post.id}>
                      <Card key={index} style={{ width: '780px' }} className='card-container'>
                        <Card.Header>
                          <Badge pill bg='dark'>#{post.id}</Badge>
                        </Card.Header>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Body>{post.body}</Card.Body>
                        <div className='card-btn'>
                          <DeletePost id={post.id} data={data} setData={setData} />
                          <EditPost id={post.id} title={post.title} body={post.body} data={data} setData={setData}/>
                        </div>
                      </Card>
                    </div>
                  )
                })
              )
            : (
              <h3> Add a new Post ! </h3>
              )
        }
      </div>
    </div>
  )
}

export default Posts
