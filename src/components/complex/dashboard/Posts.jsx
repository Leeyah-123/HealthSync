import { useNavigate } from "react-router-dom"

const Posts = () => {

    const navigate = useNavigate()
  return (
    <div>
    <p>posts</p>
        <button onClick={() => {
            navigate("1")
        }}>1</button>
    </div>
    
  )
}

export default Posts