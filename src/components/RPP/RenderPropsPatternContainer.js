import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";

export default class RenderPropsPatternContainer extends React.Component {
    render() {
        return (
            <div>
                <h2>Render Props Pattern</h2>
                <Counter
                    render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}
                />
                <Counter
                    render={(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />}
                />
            </div>
        );
    }
}
