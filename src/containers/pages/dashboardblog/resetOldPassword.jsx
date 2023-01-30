
import LayoutDashboard from "hocs/layouts/LayoutDashboard";
import { EnvelopeIcon, LockClosedIcon,  } from '@heroicons/react/20/solid'
import { check_authenticated, load_user, login, refresh, reset_password, reset_password_confirm } from "redux/actions/auth/auth";
import {useState, useEffect} from 'react'
import { connect } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";


function ResetOldPassword({
    reset_password_confirm,
    isAuthenticated,
    loading,
    check_authenticated,
    refresh,
    load_user
}){
  
  const params = useParams()
  const uid = params.uid
  const token = params.token
  
  useEffect(()=>{
    isAuthenticated ? <></>:
    <>
    {refresh()}
    {check_authenticated()}
    {load_user()}
    </>
},[])

    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''

    });
    
    const {
        new_password,
        re_new_password
    } = formData 

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const navigate = useNavigate()

    const onSubmit = e => {
      e.preventDefault();
      reset_password_confirm(uid, token, new_password, re_new_password)
      
      
      navigate('/dashboard/')
      
    }

    
    return(
      <>
      
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <p className="mt-2 text-center text-sm text-gray-600">
              Back to{' '}
              <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Home
              </a>
            </p>
          </div>
          <form  onSubmit={e=>{onSubmit(e)}} className="mt-8 space-y-6" method="POST">
          

            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Password
                </label>
                <input
                  value={new_password}
                  name="new_password"
                  type="password"
                  onChange={e=>onChange(e)}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="New Password"
                />
                <input
                  value={re_new_password}
                  name="re_new_password"
                  type="password"
                  onChange={e=>onChange(e)}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Repeat New Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/dashboard/" className="font-medium text-indigo-600 hover:text-indigo-500">
                  login
                </Link>
              </div>
            </div>

            <div>
              <button
                
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    )
}

const mapStateToProps=state=>({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading
})

export default connect(mapStateToProps, {
  reset_password_confirm,
    refresh,
    check_authenticated,
    load_user,
}) (ResetOldPassword)