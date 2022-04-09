import { useEffect, useState } from "react";

export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [post, setPost] = useState({});

    const getPost = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => {
                setLoading(false);
                setError("");
                setPost(json);
            })
            .catch(() => {
                setLoading(false);
                setError("There is a server side problem");
                setPost({});
            });
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div>
            {loading ? <div>Loading...</div> : post.title}
            {error || null}
        </div>
    );
}
