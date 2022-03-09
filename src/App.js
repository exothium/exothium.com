import logo from './logo.svg';
import React from "react";
import './App.css';
import TopContent from "./components/TopContent";
import TextGradient from "./components/TextGradient";
import NoiseToSignal from "./components/NoiseToSignal";


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
            <div width='auto'>
                <div style={{width: "200px",height:'10px',backgroundColor:"#121212",position:"relative"}} width='50%' height='20' backgroundColor="white"/>
                <NoiseToSignal style={{marginTop: "-2px"}} width='auto' height='400px'/>
            </div>
            </body>
        </div>
    );
}

export default App;
