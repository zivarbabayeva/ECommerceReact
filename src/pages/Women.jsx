import { useNavigate } from "react-router-dom"
export default function Women() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/product")
  }
  return <div>
    <h1>Kids</h1>
    <button onClick={handleSubmit}>Submit</button>
  </div>
}