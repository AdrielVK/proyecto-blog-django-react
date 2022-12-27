import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from 'assets/img/logo.png';
import loading from 'assets/img/loading.gif';

function Navbar(){
    return(
        <nav className="w-full py-4  top-0 fixed">
            <div className=" bg-white px-4 sm:px-6">
                <div className="md:px-12 px-2 -ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-2">
                        <img
                        src={logo} 
                        width={70}
                        height={70}
                        className=""/>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Link to='/casos' className=" mx-4 text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-500 hover:transition hover:duration-400 hover:underline hover:underline-offset">Casos</Link>
                        <Link to='/servicios' className=" mx-4 text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-500 hover:transition hover:duration-400 hover:underline hover:underline-offset">Servicios</Link>
                        <Link to='/nosotros' className=" mx-4 text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-500 hover:transition hover:duration-400 hover:underline hover:underline-offset">Nosotros</Link>
                        <Link to='/contacto' className=" mx-4 text-lg inline-flex font-medium leading-6 text-gray-900 hover:text-indigo-500 hover:transition hover:duration-400 hover:underline hover:underline-offset">Contacto</Link>
                        <button 
                            type="button"
                            
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-900 px-6 py-2 text-md font-bold text-white shadow-sm hover:transition hover:duration-400 hover:ease-in-out hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                        >
                        Contratanos
                        </button>
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