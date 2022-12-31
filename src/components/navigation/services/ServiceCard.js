export default function ServiceCard({data}){
    return(
        <div className="text-center rounded-md p-8 w-full h-96 lg:h-[200pm] hover:-translate-y-1 transition duration-600 ease-in-out bg-tranparent hover:bg-gray-100 shadow-lg hover:shadow-2xl">
            <div className="w-full">
                <i className='transition duration-600 ease-in-out bx bx-code-block text-6xl hover:text-indigo-500 text-indigo-900' ></i>
                <h2 className="text-xl font-semibold text-gray-900 pt-8">{data.title}</h2>
                <p className="text-lg font-regular text-gray-500 pt-4">{data.description}</p>
            </div>
        </div>
    )
};

