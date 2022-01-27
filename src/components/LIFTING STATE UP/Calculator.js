import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "../../lib/converter";

export default class Calculator extends React.Component {
    state = { temperature: "", scale: "c" };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <fieldset>
                <TemperatureInput scale="c" temperature={celsius} onChangeHandler={this.handleChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onChangeHandler={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </fieldset>
        );
    }
}
