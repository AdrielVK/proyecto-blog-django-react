import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async'
import { get_categories} from "redux/actions/categories/categories"
import { connect } from "react-redux"
import {get_blog_list } from "redux/actions/blog/blog";
import {get_blog_list_page } from "redux/actions/blog/blog";

function Blog({
    get_categories,
    categories,
    get_blog_list,
    get_blog_list_page,
    posts,
    count,
    next,
    previous,
}){
    


    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list()
        get_blog_list_page()
    },[])

    return(
        <Layout>
            <Helmet>
              <title>Adriel Vallejos Kehmeier - Contacto</title>
              <meta name='description' content='Project App Full-Stack developed by Adriel Vallejos Kehmeier'></meta>
              <link rel='canonical' href='www.//AdrielValejosApp.com'/>
              <meta name='robots' content='all'></meta>
              <meta name='keywords' content='portfolio, Adriel Vallejos Kehmeier, Fullstack-app, fullstack developer'></meta>
              <meta name='published' content='Adriel Vallejos Kehmeier'></meta>
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                Blog
            </div>
            <Footer/>
            
        </Layout>
    )
};

const mapStateToprops = state =>({
    categories: state.categories.categories,
    posts: state.blog.blog_list,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})

export default connect(mapStateToprops, {
    get_categories,
    get_blog_list,
    get_blog_list_page, 
}) (Blog)