import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../../context/theme-context";
import React, { useContext } from "react";

export default class Content extends React.Component {
    render() {
        const { theme, switchBg } = this.context;
        return (
            <div>
                <h2>This is a content</h2>
                <div>
                    <h2>Render Props Pattern</h2>
                    <Counter>
                        {(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}
                    </Counter>
                    <Counter>
                        {(count, incrementCount) => (
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={theme}
                                switchBg={switchBg}
                            />
                        )}
                    </Counter>
                </div>
            </div>
        );
    }
}

Content.contextType = ThemeContext;

// export default function Content() {
//     const context = useContext(ThemeContext);
//     const { theme, switchBg } = context;
//
//     return (
//         <div>
//             <h2>This is a content</h2>
//             <div>
//                 <h2>Render Props Pattern</h2>
//                 <Counter>
//                     {(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />}
//                 </Counter>
//                 <Counter>
//                     {(count, incrementCount) => {
//                         return (
//                             <HoverCounter
//                                 count={count}
//                                 incrementCount={incrementCount}
//                                 theme={theme}
//                                 switchBg={switchBg}
//                             />
//                         );
//                     }}
//                 </Counter>
//             </div>
//         </div>
//     );
// }
