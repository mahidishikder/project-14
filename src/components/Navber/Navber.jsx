import { Link } from "react-router-dom"

function Navber() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-10">
      <h2 className="text-3xl font-bold"><span className="text-primary">Mahadi</span> Shikder</h2>
       <div className="text-lg font-medium text-gray-800  space-x-5">
       <Link to={`/home`} className="hover:bg-primary py-2 px-4 duration-300 rounded hover:text-white">Home</Link>
       <Link to={`/portfolio`} className="hover:bg-primary py-2 px-4 duration-300 rounded hover:text-white">Portfolio</Link>
       <Link to={`/projects`} className="hover:bg-primary py-2 px-4 duration-300 rounded hover:text-white">Projects</Link>
       <Link to={`/about`} className="hover:bg-primary py-2 px-4 duration-300 rounded hover:text-white">About</Link>
       <Link to={`/contact`} className="hover:bg-primary py-2 px-4 duration-300 rounded hover:text-white">Contact</Link>
        
       </div>

       <button className="btn text-lg btn-primary">click hare</button>
    </div>
  )
}

export default Navber