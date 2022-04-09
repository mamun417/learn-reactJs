import { useContext } from "react";
import CounterContext from "../../../context/counter-context";

export default function ComponentC() {
    const counterContext = useContext(CounterContext);

    return (
        <div>
            <button onClick={() => counterContext.counterDispatch({ type: "increment", value: 1 })} type="button">
                Increment {counterContext.counterState.counter}
            </button>
            <button onClick={() => counterContext.counterDispatch({ type: "decrement", value: 1 })} type="button">
                Decrement {counterContext.counterState.counter}
            </button>
            {/*<button onClick={() => dispatch({ type: "increment", value: 5 })} type="button">*/}
            {/*    Increment by 5*/}
            {/*</button>*/}
            {/*<button onClick={() => dispatch({ type: "decrement", value: 5 })} type="button">*/}
            {/*    Decrement by 5*/}
            {/*</button>*/}
        </div>
    );
}
