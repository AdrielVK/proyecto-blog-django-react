import Footer from "components/Footer"
import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentive from "components/home/Incentive"
import UseCases from "components/home/UseCases"
import Navbar from "components/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async'
import { connect } from "react-redux"
import AOS from 'aos'
import "aos/dist/aos.css";
function Home(){

    useEffect(()=>{
        window.scrollTo(0,0)
       
    },[])

    return(
        <Layout>
            <Helmet>
              <title>Adriel Vallejos Kehmeier - Proyecto 1</title>
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
                <div data-aos="fade-down-right"
                    >
                    <Incentive />
                </div>
                 
                <div data-aos="fade-down"
                    >
                    <UseCases/>
                </div>
                <div data-aos="fade-down-left"
                    >
                    <Features/>
                    
                </div>
                <CTA/>
                <BlogList/>
            </div>
            <Footer/>
        </Layout>
    )
};


export default Home