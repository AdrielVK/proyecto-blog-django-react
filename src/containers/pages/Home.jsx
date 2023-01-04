import Footer from "components/navigation/Footer"
import BlogList from "components/navigation/home/BlogList"
import CTA from "components/navigation/home/CTA"
import Features from "components/navigation/home/Features"
import Header from "components/navigation/home/Header"
import Incentive from "components/navigation/home/Incentive"
import UseCases from "components/navigation/home/UseCases"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async'
import { connect } from "react-redux"

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
                <Header/>
                <Incentive/>
                <UseCases/>
                <Features/>
                <CTA/>
                <BlogList/>
            </div>
            <Footer/>
        </Layout>
    )
};


export default Home