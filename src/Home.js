import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const [blogs, errorMessage] = useFetch("http://localhost:3000/blogs");
    console.log(1);
    return (
        <div className="fluid">
            {blogs && <BlogList title="All Blogs!" blogs={blogs} />}
            {blogs && <BlogList title="Mario Blogs!" blogs={blogs.filter(blog => blog.author === 'mario')} />}
            {!blogs && !errorMessage && <div className="load"><div></div><div></div><div></div></div>}
            {errorMessage &&
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>}
        </div>
    );
}

export default Home;