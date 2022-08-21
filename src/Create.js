import { useState } from "react";
import Loading from "./Loading";
import {useNavigate} from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate=useNavigate();
    console.log({ author: author, title: title, body: body });
    if (isPending)
        return <Loading />
    return (
        <div className="fluid mt-4">
            <h4 className="d-flex justify-content-center mb-4 fw-bold" style={{
                color: "#f1356d"
            }}>Add a New Blog</h4>
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    setIsPending(true);
                    setTimeout(() => {
                        fetch("http://localhost:3000/blogs", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ body: body, author: author, title: title })
                        }).then(() => {
                            setIsPending(false);
                            navigate('/');
                        })
                    }, 1000)
                }
            } >
                <div className="mb-4">
                    <label className="form-label">Blog Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="form-label">Blog Body</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setBody(e.target.value)} required></textarea>
                </div>
                <div className="mb-4">
                    <label className="form-label">Blog Author</label>
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setAuthor(e.target.value)} required>
                        <option value="Unknown">Someone</option>
                        <option value="Adham">Adham</option>
                        <option value="Mohamed">Mohamed</option>
                        <option value="Hamza">Hamza</option>
                    </select>
                </div>
                <div className="mb-4 d-flex justify-content-center">
                    <button className="btn" style={{
                        color: "#fff",
                        backgroundColor: "#f1356d",
                        borderRadius: "8px"
                    }}>
                        Add Blog
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Create;