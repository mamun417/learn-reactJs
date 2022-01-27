import React from "react";
import Section from "./Section";
import ThemeContext from "../../context/theme-context";

export default class ContextApiContainer extends React.Component {
    state = { theme: "dark" };

    updateBg = () => {
        this.setState((previousState) => {
            return {
                theme: previousState.theme === "dark" ? "light" : "dark",
            };
        });
    };

    render() {
        const { theme } = this.state;

        return (
            <div>
                <ThemeContext.Provider value={{ theme }}>
                    <Section />
                </ThemeContext.Provider>
                <button onClick={this.updateBg}>Toggle Background</button>
            </div>
        );
    }
}
