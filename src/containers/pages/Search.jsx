import Footer from "components/Footer"
import Navbar from "components/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import {Helmet} from 'react-helmet-async'
import BlogList from "components/blog/search/BlogList"
import { connect } from "react-redux"
import { search_blog, search_blog_page } from "redux/actions/blog/blog";


import { useParams } from "react-router-dom"

import SearchHeader from "components/blog/SearchHeader"

function Search({
    posts,
    count,
    next,
    previous,
    search_blog_page,
    search_blog,
    categories,
    
}){
    const params = useParams()
    const term = params.term
    

    useEffect(()=>{
        window.scrollTo(0,0)
        search_blog_page(term)
        search_blog(term)
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
            <SearchHeader/>
                <div className="mx-auto mx-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <BlogList posts={posts&&posts} get_blog_list_page={search_blog_page} count={count&&count}  term={term} />
                    </div>
                </div>
            </div>
            <Footer/>
            
        </Layout>
    )
}

const mapStateToProps = state =>({
    posts: state.blog.filtered_posts,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})

export default connect(mapStateToProps, {
    search_blog,
    search_blog_page,
}) (Search)