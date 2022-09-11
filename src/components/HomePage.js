import React from 'react'
import BlogLogo from '../assets/blog.svg'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function HomePage () {
  const history = useHistory()
  return (
    <div className='blog-page'>
      <div className='blog-intro'>
        <h1 style={{ fontSize: '54px', color: 'blueviolet' }}>
          Create a <span style={{ color: 'crimson' }}>unique</span> and beautiful
          blog
        </h1>
        <p style={{ fontSize: '16px' }}>
          {' '}
          There's no other place that combines such an excellent level of
          <br />
          writing with a truly engaged and active community. Bloganity is
          <br /> truly where ideas are born, shared, and spread.
        </p>
      </div>
      <img className='blog-img' src={BlogLogo} alt='blog-img' />
      <Button
        variant='success'
        size='lg'
        className='blog-btn'
        onClick={() => history.push('/posts')}
      >
        Get Started
      </Button>
    </div>
  )
}
