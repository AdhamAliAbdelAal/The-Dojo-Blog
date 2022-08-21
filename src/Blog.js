import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
const Blog = () => {
    const { id } = useParams();
    const [blog, errorMessage] = useFetch(`http://localhost:3000/blogs/${id}`);
    const navigate=useNavigate();
    console.log(blog);
    return (
        <div className="fluid">
            {
                blog && <div className="container py-3 blog" key={blog.id}>
                    <h5 className="fs-4">{blog.title}</h5>
                    <p className="fs-6 text-muted">Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <div onClick={
                        ()=>
                        {
                            if(window.confirm("you will not be able to restore the blog again!"))
                            {
                                fetch(`http://localhost:3000/blogs/${id}`,{
                                    method:"DELETE"  
                                }).then(
                                    ()=>{
                                        navigate('/');
                                    }
                                )
                            }
                        }
                    } className="mt-4 d-flex justify-content-center">
                        <button className="btn" style={{
                            color: "#fff",
                            backgroundColor: "#f1356d",
                            borderRadius: "8px"
                        }}>
                            Delete Blog
                        </button>
                    </div>
                </div>
            }
            {!blog && !errorMessage && <Loading />}
            {errorMessage &&
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>}
        </div>
    );
}
    ;
export default Blog;