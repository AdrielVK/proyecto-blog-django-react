import moment from "moment";
import { useEffect } from "react"
import { Link } from "react-router-dom"


export default function BlogCardSearch({data,index}) {

    

    return(
        <li>
            <Link to={`/blog/${data.slug}`} className="relative block hover:shadow-lg rounded-lg"
                onMouseEnter={()=>{
                    const img = document.getElementById(index);
                    const title = document.getElementById(`title`+data.id)
                    img.classList.add("scale-95");
                    title.classList.add("text-indigo-500")
                }}
                onMouseLeave={()=>{
                    const img = document.getElementById(index);
                    const title = document.getElementById(`title`+data.id)
                    img.classList.remove("scale-95");    
                    title.classList.remove("text-indigo-500")
                    
                }}
                
            >
                <div className="rounded-sm flex items-center my-8">
                    <div className="md:flex min-w-0 md:flex-1 items-center">
                        <figure className="p-0 flex-shrink-0">
                            <img id={index} className="rounded h-64 w-full md:w-auto object-cover transition duration-700 ease-in-out "
                                src={data.thumbnail}/>
                        </figure>
                        <div className="p-0 lg:p-4 min-w-0 flex-1 ">
                            <h2 id={`title`+data.id} className="md:absolute  md:top-4 leading-8  transition duration-700 ease-in-out text-xl font-bold">{data.title.length > 75 ? data.title.slice(0,74) + '...' :data.title}</h2>
                            <div className=" md:absolute md:top-28">
                                <span className=" hover:text-indigo-500 leading-8 transition duration-700 ease-in-out text-sm font-medium text-indigo-400  mx-1"><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> &middot;
                                <span className=" hover:text-indigo-500 leading-8 transition duration-700 ease-in-out text-sm font-medium text-indigo-400 mx-1">{moment(data.published).format('LL')}</span> &middot;
                                <span className=" hover:text-indigo-500 leading-8 transition duration-700 ease-in-out text-sm font-medium text-indigo-400 mx-1">{data.time_read} min.</span> &middot;
                                <span className=" hover:text-indigo-500 leading-8 transition duration-700 ease-in-out text-sm font-medium text-indigo-400 mx-1">Vistas: {data.views}</span>
                                <p className=" leading-6 text-lg text-gray-500 font-regular">{data.description.length > 185 ? data.description.slice(0,184) + '...':data.description}</p>
                            </div>
                        </div>
                     </div>
                </div>
            </Link>
        </li>
    )
}