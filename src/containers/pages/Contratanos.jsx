import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async'

function Contratanos(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
              <title>Adriel Vallejos Kehmeier - Contratanos</title>
              <meta name='description' content='Project App Full-Stack developed by Adriel Vallejos Kehmeier'></meta>
              <link rel='canonical' href='www.//AdrielValejosApp.com'/>
              <meta name='robots' content='all'></meta>
              <meta name='keywords' content='portfolio, Adriel Vallejos Kehmeier, Fullstack-app, fullstack developer'></meta>
              <meta name='published' content='Adriel Vallejos Kehmeier'></meta>
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                Contratanos
                <Footer/>
            </div>
            
        </Layout>
    )
};

export default Contratanos