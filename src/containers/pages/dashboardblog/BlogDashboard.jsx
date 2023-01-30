import axios from "axios"
import BlogList from "components/dashboard/BlogList"
import LayoutDashboard from "hocs/layouts/LayoutDashboard"
import { useEffect } from "react"
import { connect } from "react-redux"
import { get_author_blog_list,get_author_blog_list_page } from "redux/actions/blog/blog"
import { get_categories } from "redux/actions/categories/categories"



function BlogDashboard({
    get_author_blog_list,
    get_author_blog_list_page,
    posts,
    count,
    next,
    previous,
    get_categories,
    categories
}){
    useEffect(()=>{
        get_author_blog_list()
        get_categories()
    },[])

    return(
        <LayoutDashboard>
            <div className="border-b rounded-lg border-gray-200 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                    <div className="ml-4 mt-4">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Postings</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Panel of posts created
                        </p>
                    </div>
                    <div className="ml-4 mt-4 flex-shrink-0">
                        <button
                            onClick={()=>{
                                const config = {
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Authorization': `JWT ${localStorage.getItem('access')}`
                                    }
                                };
        
                                const body = JSON.stringify({
        
                                })
        
                                const fetchData = async()=>{
                                    try{
                                        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/create`,body,config)
                                    
                                        if(res.status === 200){
                                            get_author_blog_list()
                                        }
                                    }catch(err){
                                        alert('Error al crear post')
                                    }
                                }
                                fetchData()
                            }}
                            className="relative inline-flex items-center rounded-lg border border-transparent bg-purple-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Create Post
                        </button>
                    </div>
                </div>
            </div>
            <BlogList count={count&&count} posts={posts&&posts} get_blog_list_page={get_author_blog_list}/>
        </LayoutDashboard>
    )
}

const mapStateToProps =state=> ({
    posts: state.blog.author_blog_list,
    categories: state.categories.categories,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,
})

export default connect(mapStateToProps,{
    get_author_blog_list,
    get_author_blog_list_page,
    get_categories
})(BlogDashboard)