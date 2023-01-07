import Footer from "components/Footer"
import Navbar from "components/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async'
import { get_categories} from "redux/actions/categories/categories"
import { connect } from "react-redux"
import {get_blog_list } from "redux/actions/blog/blog";
import {get_blog_list_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHearder"
import BlogList from "components/blog/BlogList"
import BlogCardHorizontal from "components/blog/BlogCardHorizontal"

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
                <CategoriesHeader categories={categories&&categories}/>
                <div className="mx-auto mx-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <BlogList count={count&&count} posts={posts&&posts} get_blog_list_page={get_blog_list_page}/>
                    </div>
                </div>
                
            </div>
            <Footer/>
            
        </Layout>
    )
};

const mapStateToProps = state =>({
    categories: state.categories.categories,
    posts: state.blog.blog_list,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})

export default connect(mapStateToProps, {
    get_categories,
    get_blog_list,
    get_blog_list_page, 
}) (Blog)