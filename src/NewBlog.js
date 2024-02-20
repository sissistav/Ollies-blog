import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, subtitle, body};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added')
            history.push('/');
        })
    }

    return (
        <div className="new-blog">
            <h2 className="form-header">New Blog</h2>
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"></input>
                <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} type="text" placeholder="Subtitle"></input>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write some thoughts"></textarea>
                <button className="form-btn">Submit</button>
            </form>
        </div>
    )
}

export default NewBlog;