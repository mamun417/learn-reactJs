import React from "react";
import withCounter from "./withCounter";

const ClickCounter = class ClickCounter extends React.Component {
    render() {
        const { count, incrementCount } = this.props;

        return (
            <div>
                <button onClick={incrementCount} type="button">
                    Clicked {count} Times
                </button>
            </div>
        );
    }
};

export default withCounter(ClickCounter);
