import { Link } from "react-router-dom"
import ServiceCard from "./ServiceCard"



export default function ServicesList({posts, title_software }){
    
    return(
        <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className=" py-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title_software}</h2>
            
          </div>
          <Link to='./servicio'>
            <div className="mx-auto mt-12 grid gap-24 max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                {posts.map((posts) => (
                    <ServiceCard data={posts}/>
                ))}
            </div>
          </Link>
        </div>
      </div>
    )
}