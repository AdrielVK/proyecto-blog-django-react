import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Servicios from 'containers/pages/Servicios';
import Casos from 'containers/pages/Casos';
import Nosotros from 'containers/pages/Nosotros';
import Contacto from 'containers/pages/Contacto';
import Contratanos from 'containers/pages/Contratanos';
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import {AnimatePresence} from 'framer-motion'

export default function AnimatedRoutes(){
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/*error display*/}
                <Route path='*' element={<Error404/>} />

                {/*home display*/}
                <Route path='/' element={<Home/>} />

                <Route path='/Casos' element={<Casos/>} />
                <Route path='/Servicios' element={<Servicios/>} />
                <Route path='/Nosotros' element={<Nosotros/>} />
                <Route path='/Contacto' element={<Contacto/>} />
                <Route path='/Contratanos' element={<Contratanos/>} />
            </Routes>
        </AnimatePresence>
    )
}