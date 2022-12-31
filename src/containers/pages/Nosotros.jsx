import Footer from "components/navigation/Footer"
import Header from "components/navigation/nosotros/Header"
import Navbar from "components/navigation/Navbar"
import Team from "components/navigation/nosotros/Team"
import Testimonial from "components/navigation/nosotros/testimonial"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import TestStats from "components/navigation/nosotros/TestStats"
import Client from "components/navigation/nosotros/Clients"
import {Helmet} from 'react-helmet-async'

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
                <Header/>
                <TestStats/>
                <Team/>
                <Client/>
                <Testimonial/>
                
            </div>
            <Footer/>
        </Layout>
    )
};

export default Home