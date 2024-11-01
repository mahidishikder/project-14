import { useLoaderData, useNavigate } from "react-router-dom"

function PortfolioMoreMore() {
  const portfooInff = useLoaderData()
  const {body,email,name,id} = portfooInff
  
  const navigate = useNavigate()
  const handleGoback = () => {
   navigate(-1)
  }

  return (
    <div className="bg-blue-300 w-[500px] rounded-lg shadow-lg mx-auto mt-56 space-y-6 p-14">
      <h2 className="text-3xl font-bold">{name}</h2>
      <p className="text-3xl  font-bold ">{id}</p>
      <p className="text-lg font-medium ">{email}</p>
      <p className="text-lg font-medium ">{body}</p>
      <button onClick={handleGoback} className="btn btn-error text-lg ml-5">Go back</button>
    </div>
  )
}

export default PortfolioMoreMore