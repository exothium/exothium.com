import React, { useState } from "react";
import './roadmap.css';
import { Parallax, useParallaxController } from "react-scroll-parallax";

function Roadmap() {
    const parallaxController = useParallaxController();
    const handleLoad = () => {
        parallaxController.update();
    }

    return (
        <div className='roadmapParent'>
            <Parallax
                translateX={[
                    '100%',
                    '0%',
                    'ease'
                ]}
                opacity={[
                    -5,
                    1,
                    'ease'
                ]}
                rootMargin={{ top: 1500, right: 100, bottom: 0, left: 100 }}
            >
                <img
                    src={'./assets/mainAssets/header_bar.svg'}
                    alt="headerBar"
                    style={{
                        width: '500px',
                        display: 'flex',
                    }}
                    onLoad={handleLoad}
                />
            </Parallax>
            <Parallax
                translateX={[
                    '-100%',
                    '0%',
                    'ease'
                ]}
                opacity={[
                    -5,
                    1,
                    'ease'
                ]}
                rootMargin={{ top: 1500, right: 100, bottom: 0, left: 100 }}
            >
                <div className='roadmapTitle'>
                    THE ODISSEY
                </div>
            </Parallax>
            <div className='roadmapContainer'>
                <Parallax
                    opacity={[
                        -0.5,
                        1,
                        'ease'
                    ]}
                >
                    <div className='roadmapcardContainer'
                         style={{ backgroundImage: "url('./assets/mainAssets/background_roadmap_card.svg')" }}>
                        <div>
                            <p className='roadmapHeader'>STAGE 01</p>
                            <dl className='roadmapItems'>
                                <dt>- Yellow Paper</dt>
                                <dt>- Website</dt>
                                <dt>- Exothium World</dt>
                                <dd>Game Specification Concept Design</dd>
                                <dd>Minting Preparations</dd>
                            </dl>
                        </div>
                    </div>
                </Parallax>
                <Parallax
                    opacity={[
                        -0.5,
                        1,
                        'ease'
                    ]}
                >
                    <div className='roadmapcardContainer'
                         style={{ backgroundImage: "url('./assets/mainAssets/background_roadmap_card_simple.svg')" }}>
                        <div>
                            <p className='roadmapHeader'>STAGE 02</p>
                            <dl className='roadmapItems'>
                                <dt>- Cairo Development</dt>
                                <dt>- Community Core Foundations</dt>
                                <dt>- Exothium World + Phaser</dt>
                                <dd>Phaser Interactions</dd>
                                <dd>Character Visuals Presentation</dd>
                            </dl>
                        </div>
                    </div>
                </Parallax>
                <Parallax
                    opacity={[
                        -0.5,
                        1,
                        'ease'
                    ]}
                >
                    <div className='roadmapcardContainer'
                         style={{ backgroundImage: "url('./assets/mainAssets/background_roadmap_card_simple.svg')" }}>
                        <div>
                            <p className='roadmapHeader'>STAGE 03</p>
                            <dl className='roadmapItems'>
                                <dt>- DAO Token Distribution</dt>
                                <dt>- Grants & Reward System</dt>
                                <dt>- Exothium World</dt>
                                <dd>Deploy Biome 01</dd>
                                <dd>In-game Exploration & Resource Gathering</dd>
                            </dl>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    );
}

export default Roadmap;