import {Link} from 'react-router-dom';
const BlogList = ({ blogs, title }) => {
    return (
        <div className="fluid">
            <h4 className="my-2">{title}</h4>
            {
                blogs.map((blog) =>
                    <Link to={`/blogs/${blog.id}`} key={blog.id}>
                        {console.log(blog.id)}
                        <div className="container py-3 blog">
                            <h5>{blog.title}</h5>
                            <p>Written by {blog.author}</p>
                        </div>
                    </Link>
                )
            }
        </div>
    );
}

export default BlogList;