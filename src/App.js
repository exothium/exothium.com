import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import TopContent from "./components/TopContent";
import TextGradient from "./components/TextGradient";
import Loading from "./components/loading/Loading";
import NoiseToSignal from "./components/NoiseToSignal";
import Roadmap from "./components/roadmap/Roadmap";
import { useParallax, useParallaxController, Parallax, ParallaxProvider } from 'react-scroll-parallax';
import HowItStarted from "./components/howItStarted/HowItStarted";


function App() {
    const [phaserLoad, setPhaserLoad] = useState(['blackhole']);
    const [noiseToSignalEntered, setNoiseToSignalEntered] = useState(false);
    const parallaxController = useParallaxController();

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
        parallaxController.update();
    };

    return (
        <ParallaxProvider>
            <div className="App">
                <Loading
                    loadingComplete={phaserLoad.length > 0 ? false : true}
                />
                <div className="App-header">
                    <TopContent
                        completeLoading={listenerCompleteLoading}
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <Parallax
                    opacity={[
                        0,
                        1,
                        'ease'
                    ]}
                >
                    <TextGradient/>
                </Parallax>
                <Parallax
                    onEnter={() => setNoiseToSignalEntered(true)}
                >
                    <HowItStarted/>
                </Parallax>
                <Parallax
                    onEnter={() => setNoiseToSignalEntered(true)}
                >
                    <Roadmap/>
                </Parallax>
                {noiseToSignalEntered &&
                <Parallax
                    opacity={[
                        -0.5,
                        1,
                        'ease'
                    ]}
                    translateX={[
                        '-10%',
                        '-10%',
                        'ease'
                    ]}
                    rootMargin={{ top: 500, right: 100, bottom: 0, left: 100 }}
                >
                    <NoiseToSignal width='auto'/>
                </Parallax>
                }
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '25px 0px'
                    }}
                >
                    <a target="_blank" href="https://discord.gg/yhNrcBmBgA">
                    <img
                        src={'./assets/icons/discord_get_in_no_font.svg'}
                        alt="discordIcon"
                        style={{
                            width: '150px',
                            cursor: 'pointer'
                        }}

                    />
                    </a>
                </div>
            </div>
        </ParallaxProvider>
    );
}

export default App;
