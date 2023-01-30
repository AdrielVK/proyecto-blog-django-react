import { connect } from "react-redux";
import {motion} from 'framer-motion'
import logo from 'assets/img/logo.png';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'
import Sidebar from "components/dashboard/Sidebar"
import { check_authenticated, load_user, logout, refresh } from "redux/actions/auth/auth";

import { CheckIcon } from '@heroicons/react/24/outline'



function LayoutDashboard({
  children,
  refresh,
  check_authenticated,
  load_user,
  user_loading,
  isAuthenticated,
  user,
  logout,
  auth,
}){

  useEffect(()=>{
    refresh()
    check_authenticated()
    load_user()
  },[])

    const navigate = useNavigate()
    //if(!isAuthenticated){
    //  navigate('/dashboard/')
    //}
    const handleLogout=()=>{
      logout();

      navigate('/dashboard/')
    }
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [open, setOpen] = useState(false)
    return(
        <>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
        <>
      
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                    <Link to='/'  className="ml-4 mt-2 hover:animate-spin-slow ease-in-out">
                    <img
                        src={logo} 
                        width={70}
                        height={70}
                        className=""/>
                    </Link>
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      <Sidebar/>
                    </nav>
                  </div>
                  <div className="hover:bg-gray-100 flex flex-shrink-0 border-t border-gray-200 p-4">
                    <button onClick={e=>setOpen(true)} className=" group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <UserCircleIcon className=" h-8 text-indigo-500"/>
                        </div>
                        <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700">{user && user.first_name}</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
              <Link to='/'  className="ml-4 mt-2 hover:animate-spin-slow ease-in-out">
                    <img
                    src={logo} 
                    width={70}
                    height={70}
                    className=""/>
                </Link>
              </div>
              <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                <Sidebar/>
              </nav>
            </div>
            <div className="rounded-md hover:bg-gray-100 flex flex-shrink-0 border-t border-gray-200 p-4">
              <button onClick={e=>setOpen(true)} className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <UserCircleIcon className=" h-8 text-indigo-500"/>
                  </div>
                  <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700">{user && user.first_name}</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="">
              
              <div className="mx-auto max-w-7xl ">
                {children}  
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
        </motion.div>
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Payment successful
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition.Root>
        </>
        
    )
}
const mapStateToProps = state => ({
  user_loading: state.auth.user_loading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
})
export default connect(mapStateToProps,{
 
  refresh,
  check_authenticated,
  load_user,
  logout
})(LayoutDashboard)