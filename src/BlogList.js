
import { Link } from 'react-router-dom';

const BlogList = ({blogs}) => {
    return (
        <div>
            <h2>All blogs</h2>
            {blogs.map((blog) => (
                <div className='blog-div' key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p>{blog.subtitle}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList;