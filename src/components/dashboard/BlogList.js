import SmallSetPagination from "components/pagination/SmallSetPagination";
import BlogCardDashboard from "./BlogCardDashboard";

export default function BlogList({posts, get_blog_list_page, count}) {



    return(
        <div className="overflow-hidden px-8 bg-white">
            <ul className="divide-y space-y-8 gap-8 divide-gray-200">
                {posts&&posts.map((post, index) => (
                    <BlogCardDashboard key={index}index={index} data={post}/>
                ))}
            </ul>
            <SmallSetPagination count={count} list_page={get_blog_list_page} list={posts}/>
        </div>
    )
}