import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useParallax, useParallaxController, Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Custom Components
import TextGradient from "./components/textGradient/TextGradient";
import MainLoading from "./components/loading/MainLoading";
import Roadmap from "./components/roadmap/Roadmap";
import HowItStarted from "./components/howItStarted/HowItStarted";
import Navbar from "./components/navbar/Navbar";
import ContextWrapper from './components/context/ContextWrapper';
import Footer from "./components/footer/Footer";

let NoiseToSignal = dynamic(
    () => import("./components/NoiseToSignal"),
    {
        ssr: false
    }
)

let TopContent = dynamic(
    () => import("./components/topContent/TopContent"),
    {
        ssr: false
    }
)

// TODO refactor css to css modules for each component since we want to modularize every component
import './App.css';
import './index.css';
import './components/textGradient/textGradient.css';
import './components/loading/mainLoading.css';
import './components/roadmap/roadmap.css';
import './components/topContent/topContent.css';
import './components/howItStarted/howItStarted.css';
import './components/navbar/navbar.css';
import './components/account/account.css';
import './quests/index.css';
import dynamic from "next/dynamic";


function MyApp({ Component, pageProps }) {
    const [phaserLoad, setPhaserLoad] = useState(['blackhole']);
    const [noiseToSignalEntered, setNoiseToSignalEntered] = useState(false);

    useEffect(() => {
    }, []);

    const listenerCompleteLoading = (canvas) => {
        let phaserLoadAux = JSON.parse(JSON.stringify(phaserLoad));
        var index = phaserLoadAux.indexOf(canvas);
        if (index !== -1) {
            phaserLoadAux.splice(index, 1);
        }
        setPhaserLoad(phaserLoadAux);
    };

    const router = useRouter();
    return (
        <ParallaxProvider>
            <ContextWrapper>
                <ToastContainer
                    position="top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme="dark"
                />
                <div className="App">
                    <MainLoading
                        loadingComplete={(phaserLoad.length == 0 || router.pathname != '/') ? true : false}
                    />
                    <Navbar/>
                    <Component {...pageProps} />
                    {router.pathname == '/' &&
                        <div>
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
                        </div>
                    }
                    <Footer/>
                </div>
            </ContextWrapper>
        </ParallaxProvider>
    );
}

export default MyApp;
