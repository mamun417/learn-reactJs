import { useEffect, useReducer, useState } from "react";

export default function GetPostByReducer() {
    const initialState = {
        loading: true,
        error: "",
        post: {},
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "SUCCESS":
                return {
                    loading: false,
                    error: "",
                    post: action.result,
                };
            case "ERROR":
                return {
                    loading: false,
                    error: "There was a server error",
                    post: {},
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getPost = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => dispatch({ type: "SUCCESS", result: json }))
            .catch(() => dispatch({ type: "ERROR" }));
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div>
            <b>Get post by reducer</b>
            {state.loading && <div>Loading...</div>}
            {state.error && <div>{state.error}</div>}
            <div>{state.post.title}</div>
        </div>
    );
}
