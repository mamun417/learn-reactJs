import React from "react";

export default class Counter extends React.Component {
    state = {
        count: 0,
    };

    incrementCount = () => {
        this.setState((previousState) => ({
            count: previousState.count + 1,
        }));
    };

    render() {
        const { count } = this.state;
        const { render } = this.props;

        return render(count, this.incrementCount);
    }
}
