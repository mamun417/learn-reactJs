import { useEffect, useState } from "react";

export default function GetPostByMe() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [post, setPost] = useState({});

    const success = (json) => {
        setLoading(false);
        setError("");
        setPost(json);
    };

    const errorServer = () => {
        setLoading(false);
        setError("");
        setPost({});
    };

    const getPost = (id = 1) => {
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/todos/" + id)
            .then((response) => response.json())
            .then((json) => success(json))
            .catch(() => errorServer());
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div>
            <b>Get post by me</b>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div>{post.title}</div>
            <button onClick={() => getPost(post.id + 1)}>Get Next Post</button>
        </div>
    );
}
