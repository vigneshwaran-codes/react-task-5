import { Button } from 'react-bootstrap'
import { IoEyeOutline } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'

function EditPost ({ id, title, body, data, setData }) {
  const history = useHistory()

  const editPost = (id) => {
    console.log(id)
    history.push('/Update/' + id)
  }

  return (
    <div>
      <Button variant='light' size='sm' 
      style={{ width: '8rem' }} 
      className='view-btn' 
      setData={setData}
      data={data}
      onClick={() => editPost(id)}>
          <IoEyeOutline />
      </Button>
    </div>
  )
}

export default EditPost
