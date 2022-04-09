import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/LIFTING STATE UP/Calculator";
import HigherOrderComponentContainer from "./components/HOC/HigherOrderComponentContainer";
import RenderPropsPatternContainer from "./components/RPP/RenderPropsPatternContainer";
import ContextApiContainer from "./components/CONTEXTAPI/ContextApiContainer";
import Counter from "./components/Reducer/Counter";
import GlobalReducerCounter from "./components/Reducer/Global/Counter";
import GetPost from "./components/Reducer/ServerDataHandeling/GetPost";
import GetPostByReducer from "./components/Reducer/ServerDataHandeling/GetPostByReducer";
import GetPostByMe from "./components/Reducer/ServerDataHandeling/GetPostByMe";

function App() {
    return (
        <div>
            {/*<Calculator />*/}
            {/*<HigherOrderComponentContainer />*/}
            {/*<RenderPropsPatternContainer />*/}
            {/*<ContextApiContainer />*/}
            <Counter />
            <GlobalReducerCounter />
            <GetPost />
            <GetPostByReducer />
            <GetPostByMe />
        </div>
        /*<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>*/
    );
}

export default App;
