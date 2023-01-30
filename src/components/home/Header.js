import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import homeimg from "assets/img/home.png"
import background from "assets/img/backgrund.jpg"

function Header(){
    

    return(
        <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-6xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              
              <div >
                <h1 className="text-4xl text-indigo-900 font-bold tracking-tight  sm:text-6xl">
                  Texto de <span> </span>
                  <Typewriter
                    words={['Ejemplo', 'Example', 'Beispiel', 'Przykład', 'Primjer']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    //onLoopDone={handleDone}
                    //onType={handleType}
                  /> 
                </h1>
                
                <ul className="flex gap-8  py-12">
                    <li className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center inline-flex border-b-2 border-transparent hover:border-indigo-500 hover:text-black" >
                        <Link to='/servicios/servicio'>
                            Servicio 1
                        </Link>
                    </li>
                    <li className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center inline-flex border-b-2 border-transparent hover:border-indigo-500 hover:text-black" >
                        <Link to='/servicios/servicio'>
                            Servicio 2
                        </Link>
                    </li>
                    <li className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center inline-flex border-b-2 border-transparent hover:border-indigo-500 hover:text-black" >
                        <Link to='/servicios/servicio'>
                            Servicio 3
                        </Link>
                    </li>
                </ul>
                
                <div className="mt-8 flex gap-x-4 ">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-indigo-900 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-500 hover:ring-indigo-700"
                  >
                    Get started
                    <span className="animate-ping text-indigo-100" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  
                </div>
              </div>
              <div className=" flow-root absolute max-w-7xl inset-x-0 top-[calc(100%-25rem)] md:top-[calc(100%-32rem)] -z-10 transform-gpu overflow-hidden bg-white  lg:top-[calc(100%-38rem)] sm:top-[calc(100%-28rem)]">
                <img src={homeimg} className="float-right w-36 lg:w-96 md:w-60 object-cover "/>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    )
};

export default Header;