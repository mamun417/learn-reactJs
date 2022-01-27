import React from "react";
import Section from "./Section";
import ThemeContext from "../../context/theme-context";

export default class ContextApiContainer extends React.Component {
    state = {
        theme: "dark",
        switchBg: () => {
            this.setState((previousState) => {
                return {
                    theme: previousState.theme === "dark" ? "light" : "dark",
                };
            });
        },
    };

    render() {
        const { theme, switchBg } = this.state;

        return (
            <div>
                <ThemeContext.Provider value={{ theme, switchBg }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
