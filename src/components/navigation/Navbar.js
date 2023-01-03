import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logo from 'assets/img/logo.png';
import loading from 'assets/img/loading.gif';
import { useState } from "react";
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'



const solutions = [
    {
        name: 'Casos',
        description: 'Texto de ejemplo',
        href: '/casos',
        icon: IconOne,
    },
    {
        name: 'Servicios',
        description: 'Texto de ejemplo',
        href: '/servicios',
        icon: IconTwo,
    },
    {
        name: 'Nosotros',
        description: 'Texto de ejemplo',
        href: '/nosotros',
        icon: IconThree,
    },
    {
        name: 'Contacto',
        description: 'Texto de ejemplo',
        href: '/contacto',
        icon: IconFour,
    },
    {
        name: 'Contratanos',
        description: 'Texto de ejemplo',
        href: '/contratanos',
        icon: IconFive,
    },
]



function Navbar(){
    //const [loading,setLoading] = useState(true)

    window.onscroll = function(){scrollFunction()}

    function scrollFunction(){
        if(document.getElementById('navbar')){
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            } 
        }
    }

    const [open, setOpen] = useState(false)

    return(
        <nav id="navbar" className="w-full py-4 z-40 top-0 fixed transition duration-300 ease-in-out">
            <div className=" px-4 sm:px-6">
                <div className="md:px-12 px-2 -ml-4 -mt-2 hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <Link to='/'  className="ml-4 mt-2 hover:animate-spin-slow ease-in-out">
                        <img
                        src={logo} 
                        width={70}
                        height={70}
                        className=""/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/casos' 
                        className=" 
                        mx-4 
                        text-lg 
                        inline-flex
                        font-medium
                        leading-6
                        text-gray-900 
                        
                        capitalize
                        relative
                        transition-all
                        duration-500
                        before:content-['']
                        before:absolute
                        before:-bottom-2
                        before:left-0
                        before:w-0
                        before:h-1
                        before:rounded-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-indigo-500
                        before:via-slate-400
                        before:to-zinc-500
                        hover:before:w-full
                        hover:before:opacity-100 
                        ">
                            Casos
                        </NavLink>
                        <NavLink to='/servicios' 
                        className=" 
                        mx-4 
                        text-lg 
                        inline-flex 
                        font-medium 
                        leading-6 
                        text-gray-900 
                        hover:text-indigo-500 
                        capitalize
                        relative
                        transition-all
                        duration-500
                        before:content-['']
                        before:absolute
                        before:-bottom-2
                        before:left-0
                        before:w-0
                        before:h-1
                        before:rounded-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-indigo-500
                        before:via-slate-400
                        before:to-zinc-500
                        hover:before:w-full
                        hover:before:opacity-100 ">Servicios</NavLink>
                        <NavLink to='/nosotros' 
                        className=" mx-4 
                        text-lg 
                        inline-flex 
                        font-medium 
                        leading-6 
                        text-gray-900 
                        hover:text-indigo-500 
                        capitalize
                        relative
                        transition-all
                        duration-500
                        before:content-['']
                        before:absolute
                        before:-bottom-2
                        before:left-0
                        before:w-0
                        before:h-1
                        before:rounded-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-indigo-500
                        before:via-slate-400
                        before:to-zinc-500
                        hover:before:w-full
                        hover:before:opacity-100">Nosotros</NavLink>
                        <NavLink to='/contacto' className=" mx-4 
                        text-lg 
                        inline-flex 
                        font-medium 
                        leading-6 
                        text-gray-900 
                        hover:text-indigo-500 
                        capitalize
                        relative
                        transition-all
                        duration-500
                        before:content-['']
                        before:absolute
                        before:-bottom-2
                        before:left-0
                        before:w-0
                        before:h-1
                        before:rounded-full
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-indigo-500
                        before:via-slate-400
                        before:to-zinc-500
                        hover:before:w-full
                        hover:before:opacity-100">Blog</NavLink>
                        <Link 
                            to='/contratanos'
                            
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-900 px-6 py-2 text-md font-bold text-white shadow-sm hover:transition hover:duration-400 hover:ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                        >
                        Contratanos
                        
                        </Link>
                    </div>
                </div>
                <div className="md:px-12 px-2 -ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <Link to='/'  className="ml-4 mt-2 hover:animate-spin-slow ease-in-out">
                        <img
                        src={logo} 
                        width={70}
                        height={70}
                        className=""/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                   
                    <Popover className="relative">
                                    {({ open }) => (
                                    <>
                                        <Popover.Button
                                        className={`
                                            ${open ? '' : 'text-opacity-90'}
                                            focus:ring-none focus:outline-none`}
                                        >
                                        {
                                            open ?
                                            <i  className='bx bx-x text-indigo-900 hover:text-indigo-500 transition duration-600 ease-in-out text-6xl' ></i> 
                                                        
                                            :
                                            <i  className='text-indigo-900 hover:text-indigo-500 transition duration-600 ease-in-out text-6xl bx bx-menu'></i>
                                        }
                                        
                                        </Popover.Button>
                                        <Transition
                                        as={Fragment}
                                        enter=" ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                        >
                                        <Popover.Panel className="absolute left-30 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                            <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                                {solutions.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className=" -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                >
                                                    <div className=" flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                    <item.icon aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-4">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {item.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {item.description}
                                                    </p>
                                                    </div>
                                                </NavLink>
                                                ))}
                                            </div>
                                            
                                            </div>
                                        </Popover.Panel>
                                        </Transition>
                                    </>
                                    )}
                    </Popover>
                    </div>
                </div>
            </div>
        </nav>
    )
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {

}) (Navbar)

function IconOne() {
    return (
      
        <i class='text-indigo-900 text-4xl bx bx-food-menu'></i>
    )
  }
  
function IconTwo() {
    return (
        <i class='text-indigo-900 text-4xl bx bx-briefcase-alt-2'></i>
    )
}
  
function IconThree() {
    return (
        <i class=' text-indigo-900 text-4xl bx bxs-buildings'></i>
    )
}

function IconFour() {
    return (
        <i class='text-indigo-900 text-4xl bx bxs-comment'></i>
    )
}

function IconFive() {
    return (
        <i class='text-indigo-900 text-4xl bx bx-cart'></i>
    )
}