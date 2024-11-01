import { useLoaderData } from "react-router-dom"
import Project from "../Project/Project"

function Projects() {
  const porjectsData = useLoaderData()

  return (
    <div className="max-w-7xl mx-auto">
      
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {
          porjectsData.map((project,i) => <Project project={project} key={i}></Project>)
        }
      </div>
    </div>
  )
}

export default Projects