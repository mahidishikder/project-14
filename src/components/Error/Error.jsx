import { Link, useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError()
  const {statusText,massage} = error
  console.log(error)
  return (
    <div>
     <h2 className="text-7xl font-extrabold text-center mt-44"> opps! </h2>
     <h3 className="text-lg text-center mt-10">{statusText || massage}</h3>
     <div className="text-center mt-10">
     <Link to={`/`}><button className="btn btn-success text-center">Go Home</button></Link>
     </div>
    </div>
  )
}

export default Error