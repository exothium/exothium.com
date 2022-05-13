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
import axios from "axios";

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


    useEffect(() => {
        const getUser = async () => {
          await axios.get("http://localhost:5000/", {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true
            }
          }).then((res) => {
            console.log(res.data)
          })
        }

        getUser()
    }, [])

    const loginTwitter = () => {
        window.open("http://localhost:5000/twitter", "_self")
    }
    const loginGithub = () => {
        window.open("http://localhost:5000/github", "_self")
    }

    const loginDiscord = () => {
        window.open("http://localhost:5000/discord", "_self")
    }
    
    const logout = () => {
        window.open("http://localhost:5000/logout", "_self")
    }

    

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

                    <a target="_blank" onClick={loginTwitter}>
                    <img
                        src={'./assets/icons/twitter-icon.png'}
                        alt="discordIcon"
                        style={{
                            marginLeft: "60px",
                            width: '70px',
                            cursor: 'pointer'
                        }}
                    />
                    </a>

                    <a target="_blank" onClick={loginGithub}>
                    <img
                        src={'./assets/icons/github-icon.png'}
                        alt="githubIcon"
                        style={{
                            marginLeft: "60px",
                            width: '70px',
                            cursor: 'pointer'
                        }}
                    />
                    </a>

                    <a target="_blank" onClick={loginDiscord}>
                    <img
                        src={'./assets/icons/discord-icon.png'}
                        alt="discordIcon"
                        style={{
                            marginLeft: "60px",
                            width: '70px',
                            cursor: 'pointer'
                        }}
                    />
                    </a>

                    <a target="_blank" onClick={logout}>
                    <img
                        src={'./assets/icons/logout-icon.png'}
                        alt="logoutIcon"
                        style={{
                            marginLeft: "60px",
                            width: '70px',
                            cursor: 'pointer'
                        }}
                    />
                    </a>

                    {/* Icon for loging out of any social media account*/}
                    {/* <a target="_blank" onClick={logout}>
                    <img
                        src={'./assets/icons/logout-icon.png'}
                        alt="logoutIcon"
                        style={{
                            marginLeft: "60px",
                            width: '70px',
                            cursor: 'pointer'
                        }}
                    />
                    </a> */}
                </div>
            </div>
        </ParallaxProvider>
    );
}

export default App;
