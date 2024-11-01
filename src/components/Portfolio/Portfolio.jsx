import { useLoaderData } from "react-router-dom"
import PortfolioItem from "../PortfolioItem/PortfolioItem"

function Portfolio() {
  const PortfolioInfo = useLoaderData()

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
       {
        PortfolioInfo.map((portfoo,i) => <PortfolioItem portfoo={portfoo} key={i}></PortfolioItem>)
       }
    </div>
  )
}

export default Portfolio