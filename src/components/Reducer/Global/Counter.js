import { useReducer } from "react";
import ComponentA from "./ComponentA";
import CounterContext from "../../../context/counter-context";

export default function Counter() {
    const initialState = {
        counter: 0,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { counter: state.counter + action.value };
            case "decrement":
                return { counter: state.counter - action.value };
            default:
                return state;
        }
    };

    const [counterState, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={{ counterState, counterDispatch: dispatch }}>
            <div style={{ marginTop: "20px" }}>
                <b>Global Reducer</b>
            </div>
            <div>
                <div>Count - {counterState.counter}</div>
                <ComponentA />
            </div>
        </CounterContext.Provider>
    );
}
