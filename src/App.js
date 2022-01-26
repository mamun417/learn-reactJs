import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/Calculator";
import HigherOrderComponentContainer from "./components/HOC/HigherOrderComponentContainer";
import RenderPropsPatternContainer from "./components/RPP/RenderPropsPatternContainer";

function App() {
    return (
        <div>
            <Calculator />
            <HigherOrderComponentContainer />
            <RenderPropsPatternContainer />
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
