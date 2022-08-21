import BlogList from './BlogList';
import useFetch from './useFetch';
import Loading from './Loading';
const Home = () => {
    const [blogs, errorMessage] = useFetch("http://localhost:3000/blogs");
    //console.log(1);
    return (
        <div className="fluid">
            {blogs && <BlogList title="All Blogs!" blogs={blogs} />}
            {!blogs && !errorMessage && <Loading />}
            {errorMessage &&
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>}
        </div>
    );
}

export default Home;