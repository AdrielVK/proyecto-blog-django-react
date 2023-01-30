import moment from "moment";
import { useEffect } from "react"
import { Link } from "react-router-dom"


export default function BlogCardDashboard({data,index}) {

    

    return(
        <li>
            <Link to={`/dashboard/edit/${data.slug}`} className="relative block hover:shadow-lg rounded-lg"
                onMouseEnter={()=>{
                    const title = document.getElementById(`title`+data.id)
                    title.classList.add("text-indigo-500")
                }}
                onMouseLeave={()=>{
                    const title = document.getElementById(`title`+data.id)
                    title.classList.remove("text-indigo-500")
                    
                }}
                
            >
                <div className="rounded-sm flex items-center my-8">
                    <div className="md:flex min-w-0 md:flex-1 items-center">
                        <figure className="p-0 flex-shrink-0">
                            {
                                data.thumbnail ? 
                                <img id={index} className="rounded h-64 w-full md:w-auto object-cover transition duration-700 ease-in-out "
                                src={data.thumbnail}/>
                                :
                                <div className=" h-64 lg:w-96 w-full object-cover rounded bg-gray-100"></div>
                            }
                        </figure>
                        <div className="p-0 lg:p-4 min-w-0 flex-1 ">
                            {
                                data.title ?
                                <h2 id={`title`+data.id} className="md:absolute  md:top-4 leading-8  transition duration-700 ease-in-out text-xl font-bold">{data.title.length > 75 ? data.title.slice(0,74) + '...' :data.title}</h2>
                                :
                                <p className=" lg:mt-0 lg:absolute lg:top-4 leading-10 text-3xl pb-4 font-semibold transition duration-300 ease-in-out w-72 py-2 bg-gray-100"></p>
                            }
                            <div className=" md:absolute md:top-28">
                                {
                                    data.status === 'publish'?
                                    <>

                                    <span className=" text-green-500 leading-8 transition duration-700 ease-in-out text-sm font-medium  mx-1">Published</span> &middot;
                                    </>
                                    :
                                    <>
                                    <span className=" text-red-500 leading-8 transition duration-700 ease-in-out text-sm font-medium  mx-1">Draft</span> &middot;
                                    </>

                                }
                                {
                                    data.category &&
                                    <>
                                    <span className=" hover:text-orange-500  mx-1 font-medium text-gray-800 text-sm "><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> <span className="text-gray-300">&middot;</span> 
                                    </>
                                }
                                <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm">{moment(data.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                                <span className="mt-2 mx-2 font-medium text-gray-800 text-sm">{data.time_read} min read</span> 
                                {
                                    data.description ?
                                    <p className="mt-4 text-lg font-regular text-gray-800 leading-8">{data.description.length > 150 ? data.description.slice(0,149):data.description}</p>
                                    :
                                    <>
                                    <p className=" w-full py-2 bg-gray-100 mt-4 text-lg font-regular text-gray-800 leading-8"></p>
                                    <p className=" w-full py-2 bg-gray-100 mt-4 text-lg font-regular text-gray-800 leading-8"></p>
                                    <p className=" w-full py-2 bg-gray-100 mt-4 text-lg font-regular text-gray-800 leading-8"></p>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}