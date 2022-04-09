import { useReducer } from "react";

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
        <div>
            <div>Count - {counterState.counter}</div>
            <button onClick={() => dispatch({ type: "increment", value: 1 })} type="button">
                Increment
            </button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })} type="button">
                Decrement
            </button>
        </div>
    );
}
