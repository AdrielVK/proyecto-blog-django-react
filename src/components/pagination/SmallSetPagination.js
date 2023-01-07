import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import {useEffect, useState} from 'react';
import { get_blog_list_page } from 'redux/actions/blog/blog';

export default function SmallSetPagination({list_page, list, count}){
    const [active, setActive] = useState(1);
    const [listingPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1)

    const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);
        list_page(page)
    }

    const previous_number = () => {
        if (currentPage !== 1){
            setCurrentPage(currentPage-1);
            setActive(currentPage-1)
            list_page(currentPage-1)
        }
    }

    const next_number = () => {
        if (currentPage !== Math.ceil(list_page.length / 3)){
            setCurrentPage(currentPage+1);
            setActive(currentPage+1)
            list_page(currentPage+1)
        }
    }

    useEffect(() => {
        window.scrollTo(0,0)
    })

    let numbers = [];

    const getNumber = () => {
        let itemsPerPage = listingPerPage;
        let pageNumber = 1;

        for (let i=0; i<count; i+= itemsPerPage){
            const page = pageNumber;
            let content = null;
            if (active === page) {
                content =(
                    <div key={i} className={`hidden md:-mt-px md:flex`}>
                        <div className='border-gray-700 text-gray-700 border-t-2 pt-4 px-4 inline-flex items-center'>
                            {pageNumber}

                        </div>
                    </div>
                )
            } else {
                content = (
                    <div key={i} onClick={() => {
                        visitPage(page)
                    }} className="hidden md:flex cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 inline-flex items-center text-sm font-medium">
                        {pageNumber}
                    </div>
                )
            }
            numbers.push(
                content
            );
            pageNumber++;

        }
        return numbers;
    }

    return (
        <nav className='border-t border-gray-200 px-4 flex items-center justify-between sm:px-0'>
            {
                currentPage !==1 ?
                    <div className='-mt-px w-0 flex-1 flex'>
                        <div
                            onClick={()=>{previous_number()}}
                            className='cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center' 
                        >
                            <ArrowLeftCircleIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden="true" />
                            Previous
                        </div>
                    </div>
                    :
                    <div className='-mt-px w-0 flex-1 flex'>
                        <div
                            className='cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center' 
                        >
                            
                        </div>
                    </div>
            }
            {getNumber()}
            {
                numbers.length === 0 || currentPage === numbers.length ?
                <div className='-mt-px w-0 flex-1 flex justify-end'>

                </div>
                :
                <div className='-mt-px w-0 flex-1 flex justify-end'>
                    <button
                    onClick={() => {next_number()}}
                    className='border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm'
                    >
                        Next 
                        <ArrowRightCircleIcon className='ml-3 h-5 w-5 text-gray-400' aria-hidden='true'/>
                    </button>
                </div>
            }
        </nav>
    )
}