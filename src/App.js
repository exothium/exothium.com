import logo from './logo.svg';
import React from "react";
import './App.css';
import TopContent from "./components/TopContent";
import TextGradient from "./components/TextGradient";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TopContent/>
            </header>
            <body>
            <div>
                <TextGradient/>
            </div>
            </body>
        </div>
    );
}

export default App;
