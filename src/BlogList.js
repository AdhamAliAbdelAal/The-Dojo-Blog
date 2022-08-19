const BlogList = ({ blogs, title }) => {
    return (
        <div className="fluid">
            <h4 class="my-2">{title}</h4>
            {
                blogs.map((blog) =>
                    <div className="container py-3 blog" key={blog.id}>
                        <h5>{blog.title}</h5>
                        <p>Written by {blog.author}</p>
                    </div>
                )
            }
        </div>
    );
}

export default BlogList;