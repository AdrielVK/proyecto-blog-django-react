import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { useState } from "react"

export default function SearchHeader({categories}) { 
    
    const location = useLocation()
    const navigate = useNavigate()
    //search
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => navigate("/s/" + term), 0.2);
        setTerm("");
    };
    
    return(
        <div className="w-full bg-gray-100 py-8">
            <div className="grid grid-cols-12">
                <div className="col-span-10">
                    <div className="space-x-8 px-8 ">
                        <div className="relative">
                            <div className=" relative -mb-6 w-full overflow-x-auto pb-6">
                                <ul 
                                role="list"
                                className="mx-4 inline-flex items-center space-x-8 sm:mx-6 "
                                >
                                    <Link to="/blog" className={` transition transition-duration-400  ease-in-out bg-white hover:text-indigo-400 inline-flex flex-col text-center lg:w-auto py-2 px-6 rounded-lg text-sm font-semibold`}>
                                        Volver
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <form onSubmit={(e)=> onSubmit(e)} className="relative col-span-2  mr-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </div>
                    <input 
                        id='search'
                        name='search'
                        value={term}
                        onChange={(e) => handleChange(e)}
                        type='search'
                        className={`
                            py-2.5 pl-10 pr-3
                            block w-full h-full rounded-full
                            border border-gray-300 bg-white
                            focus:border-gray-200 focus:ring-gray-200
                            placeholder-gray-600 focus:placeholder-gray-500
                        `}
                    />
                </form>
            </div>
        </div>
    )
}