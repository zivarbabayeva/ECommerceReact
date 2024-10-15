import { useNavigate } from "react-router-dom"
export default function Home() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/product")
  }
  return <div>
    <h1>Home page</h1>
    <button onClick={handleSubmit}>Submit</button>
  </div>
}