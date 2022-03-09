import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import TopContent from "./components/TopContent";
import TextGradient from "./components/TextGradient";
import Loading from "./components/loading/Loading";
import NoiseToSignal from "./components/NoiseToSignal";


function App() {
    const [phaserLoad, setPhaserLoad] = useState(['blackhole']);

    /*useEffect(() => {
        setPhaserLoad(['blackhole']);
    }, []);*/

    const listenerCompleteLoading = (canvas) => {
        let phaserLoadAux = JSON.parse(JSON.stringify(phaserLoad));
        var index = phaserLoadAux.indexOf(canvas);
        if (index !== -1) {
            phaserLoadAux.splice(index, 1);
        }
        setPhaserLoad(phaserLoadAux);
    };

    return (

        <div className="App">
            <Loading
                loadingComplete={phaserLoad.length > 0 ? false : true}
            />
            <header className="App-header">
                <TopContent
                    completeLoading={listenerCompleteLoading}
                />
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
