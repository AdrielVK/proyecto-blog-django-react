import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Layout from "hocs/layouts/Layout";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {useEffect} from 'react'
import { get_blog } from "redux/actions/blog/blog";
import moment from 'moment'
import DOMPurify from 'dompurify'

function PostDetail({
    get_blog,
    post
}){

    const params = useParams()
    const slug = params.slug

    useEffect(() => {
        window.scrollTo(0,0)
        get_blog(slug)
    },[])
    return(
        <Layout>
            <Navbar/>
                {
                    post && post.slug === slug ?
                    <div className="pt-24">
                        <div className="relative overflow-hidden bg-white   lg:px-48 px-16 py-16">
                            <div className="relative px-4 sm:px-6 lg:px-8">
                                <Link to={`/category/${post.category.slug}`}
                                className="block text-center text-lg font-semibold text-indigo-500"
                                >{post.category.name}</Link>
                                    
                                <h1>
                                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                        {post.title}
                                </span>
                                    
                                </h1>
                                <div className="text-center min-w-0 flex-1 p-4 pt-8">
                                    <div className="">
                                        <span className="  leading-8 text-base font-medium text-indigo-400 mx-1">{moment(post.published).format('LLLL')}</span>
                                        
                                    </div>
                                </div>
                                <p className="mt-8  text-xl leading-8 text-gray-500">
                                    {post.description}
                                </p>
                                <figure>
                                    <img className="w-full" src={post.thumbnail}/>
                                </figure>
                                <div>
                                    <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content)}}/>
                                </div>
                                <div className="text-center min-w-0 flex-1 p-4 pt-8">
                                    <span className="  leading-8 text-base font-medium text-indigo-400 mx-1">{post.time_read} min.</span> &middot;
                                    <span className="  leading-8 text-base font-medium text-indigo-400 mx-1">Vistas: {post.views}</span>
                                </div>    
                            </div>
                        </div>
                    </div>
                    :
                    <>Loading</>
                }
            <Footer/>
        </Layout>
    )
}

const mapStateToProps=state=>({
    post: state.blog.post
})

export default connect(mapStateToProps, {
    get_blog
})(PostDetail)