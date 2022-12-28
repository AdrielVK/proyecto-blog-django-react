import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logo from 'assets/img/logo.png';
import loading from 'assets/img/loading.gif';


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

    return(
        <nav id="navbar" className="w-full py-4 z-40 top-0 fixed transition duration-300 ease-in-out">
            <div className=" px-4 sm:px-6">
                <div className="md:px-12 px-2 -ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <Link to='/'  className="ml-4 mt-2 hover:animate-spin-slow ease-in-out">
                        <img
                        src={logo} 
                        width={70}
                        height={70}
                        className=""/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/casos' className=" mx-4 text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-500 hover:transition hover:duration-400 hover:underline hover:underline-offset">Casos</NavLink>
                        <NavLink to='/servicios' className=" mx-4 text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-500 hover:transition hover:duration-400 hover:underline hover:underline-offset">Servicios</NavLink>
                        <NavLink to='/nosotros' className=" mx-4 text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-500 hover:transition hover:duration-400 hover:underline hover:underline-offset">Nosotros</NavLink>
                        <NavLink to='/contacto' className=" mx-4 text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-500 hover:transition hover:duration-400 hover:underline hover:underline-offset">Contacto</NavLink>
                        <Link 
                            to='/contratanos'
                            
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-900 px-6 py-2 text-md font-bold text-white shadow-sm hover:transition hover:duration-400 hover:ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                        >
                        Contratanos
                        
                        </Link>
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