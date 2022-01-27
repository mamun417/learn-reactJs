import React from "react";

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
};

export default class TemperatureInput extends React.Component {
    render() {
        const { temperature, scale, onChangeHandler } = this.props;

        return (
            <div>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={(e) => onChangeHandler(e, scale)} />
            </div>
        );
    }
}
