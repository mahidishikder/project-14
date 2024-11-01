import { Link, useNavigate } from "react-router-dom"

function PortfolioItem({portfoo}) {
  const {body,email,id, name,postid} = portfoo

  const navigate = useNavigate()

  const handleDetails = () => {
      navigate(`/portfoo/${id}`)
  }
  
  return (
    <div className="bg-blue-300  rounded-lg shadow-inner shadow-blue-600 p-10 space-y-6">
      <p className="text-4xl font-extrabold">{name}</p>
      <h3 className="text-bold text-2xl text-blue-600 ">📧 {email}</h3>
      <h2 className="text-medium text-xl ">{body}</h2>
      <Link to={`/portfoo/${id}`} className="btn btn-primary text-lg">More info</Link>
      <button onClick={handleDetails} className="btn btn-success ml-5 text-lg">Details</button>
    </div>
  )
}

export default PortfolioItem