import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'

function DeletePost ({ data, setData, id }){

    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response.data, 'Deleted Post', id )
            const posts = data.filter(post => post.id !== id)
            setData(posts)
        })
        .catch(err => console.log(err) )
    }

    return(
        <div className='del-post'>
            <Button variant='light' size='sm' style={{ width: '8rem' }} onClick={() => deletePost(id)} className='del-btn'><AiOutlineDelete /></Button>
        </div>
    )
}

export default DeletePost