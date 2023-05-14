import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import useHttp from "./Hooks/useHttp";
import { useEffect, useState } from "react";
import axios from "./Services/AxiosInstance";
const Blog = () => {
    const { id } = useParams();
    const [errorMessage,isLoading,makeRequest]=useHttp();
    const [blog,setBlog]=useState(null);

    useEffect(()=>{
        const requestConfig={
            method:"GET",
            url:`/blogs/${id}`

        }
        makeRequest(axios,requestConfig,setBlog);
        console.log("adham");
    },[]);
    console.log(blog);

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
                                const requestConfig={
                                    method:"DELETE",
                                    url:`/blogs/${id}`
                                }
                                makeRequest(axios,requestConfig,()=>{navigate('/')});
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