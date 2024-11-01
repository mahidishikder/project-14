import { useLoaderData, useNavigate } from "react-router-dom"

function ProjectInfo() {
  const projectsss = useLoaderData()
  const {id,name,email,username} = projectsss

  const navigate = useNavigate()
  const handleGoBack = () => {
   navigate(-1)
  }
  return (
    <div className="bg-primary text-white w-[400px] p-24 space-y-6 mx-auto mt-36 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold">{id}</h2>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-lg font-semibold">{email}</p>
      <p className="text-lg font-semibold">{username}</p>
      <button onClick={handleGoBack} className="btn btn-warning">Go back</button>
    </div>
  )
}

export default ProjectInfo