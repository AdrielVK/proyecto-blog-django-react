import SmallSetPagination from "components/pagination/SmallSetPagination";
import SmallSetPaginationSearch from "components/pagination/SmallSetPaginationSearch";
import BlogCardSearch from "../BlogCardSearch";

export default function BlogList({posts, get_blog_list_page, count, term}) {



    return(
        <div className="overflow-hidden px-8 bg-white">
            <ul className="divide-y space-y-8 gap-8 divide-gray-200">
                {posts&&posts.map((post, index) => (
                    <BlogCardSearch key={index}index={index} data={post}/>
                ))}
            </ul>
            <SmallSetPaginationSearch count={count} term={term} list_page={get_blog_list_page} list={posts}/>
        </div>
    )
}