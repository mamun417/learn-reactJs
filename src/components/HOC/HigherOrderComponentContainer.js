import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default class HigherOrderComponentContainer extends React.Component {
    render() {
        return (
            <div>
                <h2>Higher Order Component</h2>
                <ClickCounter />
                <HoverCounter />
            </div>
        );
    }
}
