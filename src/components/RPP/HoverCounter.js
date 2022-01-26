import React from "react";

export default function HoverCounter(props) {
    const { count, incrementCount } = props;

    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hover {count} Times</h1>
        </div>
    );
}
