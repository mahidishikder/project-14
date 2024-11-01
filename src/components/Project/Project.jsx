import { Link } from "react-router-dom"

function Project({project}) {
 
  const {company,email,name,id,phone,username,website} = project
  return (
    <div className="bg-primary p-10 space-y-6 rounded-xl text-white w-[350px] shadow-md duration-500 hover:bg-gray-200 hover:text-primary shadow-blue-300">
      <h2 className="text-3xl font-bold ">{name}</h2>
      <h3 className="text-2xl font-semibold">{username}</h3>
      <p className="text-lg font-semibold">{phone}</p>
      <p className="text-lg font-semibold">{website}</p>
      <Link to={`/project/${id}`} className="btn btn-warning">Info More</Link>
    </div>
  )
}

export default Project