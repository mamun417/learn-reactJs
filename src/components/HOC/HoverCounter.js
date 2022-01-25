import React from "react";
import withCounter from "./withCounter";

const HoverCounter = (props) => {
    const { count, incrementCount } = props;

    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hover {count} Times</h1>
        </div>
    );
};

export default withCounter(HoverCounter);
