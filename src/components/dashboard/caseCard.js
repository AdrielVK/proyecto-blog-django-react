import {Link} from "react-router-dom";

export default function CaseCard({data,index}){

    return (
        <li>
            <Link to={`/api/cases/${data.slug}`}
            className="shadow-lg  flex flex-col overflow-hidden rounded-lg ">
            <div  className="flex-shrink-0">
                <img id={data.id} className="h-96 w-full object-cover transition duration-700 ease-in-out" src={data.imageUrl} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        
                        {data.category}
                        
                    </p>
                    <div className="mt-2 block">
                        <p id={index} className="transition duration-400 ease-in-out lg:text-4xl text-2xl pt-4 pb-6 font-semibold  ">{data.title}</p>
                        <p className="mt-3 text-xl leading-9 text-gray-500">{data.description}</p>
                    </div>
                </div>
            </div> 
                
            </Link>
        </li>
    )
}