import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default class ClickAndHoverCounter extends React.Component {
    render() {
        return (
            <div>
                <ClickCounter />
                <HoverCounter />
            </div>
        );
    }
}
