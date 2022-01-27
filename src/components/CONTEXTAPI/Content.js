import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../../context/theme-context";

export default function Content() {
    return (
        <div>
            <h2>This is a content</h2>
            <div>
                <h2>Render Props Pattern</h2>
                <Counter>
                    {(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}
                </Counter>
                <Counter>
                    {(count, incrementCount) => {
                        return (
                            <ThemeContext.Consumer>
                                {({ theme }) => (
                                    <HoverCounter count={count} incrementCount={incrementCount} theme={theme} />
                                )}
                            </ThemeContext.Consumer>
                        );
                    }}
                </Counter>
            </div>
        </div>
    );
}
