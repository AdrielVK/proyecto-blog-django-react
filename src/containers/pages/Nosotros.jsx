import Footer from "components/Footer"
import Header from "components/nosotros/Header"
import Navbar from "components/Navbar"
import Team from "components/nosotros/Team"
import Testimonial from "components/nosotros/testimonial"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import TestStats from "components/nosotros/TestStats"
import Client from "components/nosotros/Clients"
import {Helmet} from 'react-helmet-async'
import AOS from 'aos'
import "aos/dist/aos.css";
function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
        
    },[])
    return(
        <Layout>
            <Helmet>
              <title>Adriel Vallejos Kehmeier - Nosotros</title>
              <meta name='description' content='Project App Full-Stack developed by Adriel Vallejos Kehmeier'></meta>
              <link rel='canonical' href='www.//AdrielValejosApp.com'/>
              <meta name='robots' content='all'></meta>
              <meta name='keywords' content='portfolio, Adriel Vallejos Kehmeier, Fullstack-app, fullstack developer'></meta>
              <meta name='published' content='Adriel Vallejos Kehmeier'></meta>
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                <div data-aos="fade-up"
                >
                <Header/>
                </div>
                <div data-aos="fade-left"
                >
                <TestStats/>
                </div>
                <div data-aos="fade-right"
                >
                <Team/>
                </div>
                <div data-aos="fade-down-left"
                >
                <Client/>
                </div>
                <Testimonial/>
                
            </div>
            <Footer/>
        </Layout>
    )
};

export default Home