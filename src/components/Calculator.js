import React from "react";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
    state = { temperature: "", scale: "c" };

    handleChange = (e) => {
        this.setState({
            temperature: e.target.value,
        });
    };

    render() {
        const { temperature } = this.state;

        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}
