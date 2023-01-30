import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Servicios from 'containers/pages/Servicios';
import Casos from 'containers/pages/Casos';
import Nosotros from 'containers/pages/Nosotros';
import Blog from 'containers/pages/Blog';
import Contratanos from 'containers/pages/Contratanos';
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import {AnimatePresence} from 'framer-motion'
import Category from 'containers/pages/Category';
import Search from 'containers/pages/Search';
import term from './components/blog/CategoriesHearder'
import PostDetail from 'containers/pages/PostDetail';
import LoginDashboard from 'containers/pages/dashboardblog/LoginDashboard';
import HomeDashboard from 'containers/pages/HomeDashboard';
import BlogDashboard from 'containers/pages/dashboardblog/BlogDashboard';
import ResetPassword from 'containers/pages/dashboardblog/reset_password';
import ResetOldPassword from 'containers/pages/dashboardblog/resetOldPassword';
import EditPost from 'containers/pages/dashboardblog/EditPost';

export default function AnimatedRoutes(){
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/*error display*/}
                <Route path="*" element={<Error404/>} />

                {/*home display*/}
                <Route path="/" element={<Home/>} />
                <Route path="/Casos" element={<Casos/>} />
                <Route path="/Servicios" element={<Servicios/>} />
                <Route path="/Nosotros" element={<Nosotros/>} />
                <Route path="/Blog" element={<Blog/>} />
                <Route path="/category/:slug" element={<Category />}/>
                <Route path="/s/:term" element={<Search/>}/>
                <Route path="/blog/:slug" element={<PostDetail/>}/>
                <Route path="/Contratanos" element={<Contratanos/>} />
                {/*dashboard*/}
                <Route path="/dashboard/" element={<LoginDashboard/>} />
                <Route path="/dashboard/home/" element={<HomeDashboard/>} />
                <Route path="/dashboard/blog" element={<BlogDashboard/>} />
                <Route path="/forgot_password" element={<ResetPassword/>} />
                <Route path="/password/reset/confirm/:uid/:token" element={<ResetOldPassword/>} />
                <Route path="/dashboard/edit/:slug" element={<EditPost/>} />
                
            </Routes>
        </AnimatePresence>
    )
}