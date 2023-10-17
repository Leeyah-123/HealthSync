import { useParams } from "react-router-dom"

const PostDetail = () => {
    const {id} = useParams()
  return (
    <div>PostDetail {id}</div>
  )
}

export default PostDetail