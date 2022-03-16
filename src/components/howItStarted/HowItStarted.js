import React, { useState } from "react";
import './howItStarted.css';
import { Parallax, useParallaxController } from "react-scroll-parallax";

function HowItStarted() {
    const parallaxController = useParallaxController();
    const handleLoad = () => {
        parallaxController.update();
    }

    return (
        <div className='howItStartedParent'>
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
                    HOW IT STARTED
                </div>
            </Parallax>
            <div className='howItStartedText'>
                <Parallax
                    opacity={[
                        -0.5,
                        1,
                        'ease'
                    ]}
                >
                    <p> More than 10 years ago I met Angelo, a student of architecture changing his path to pursue game
                        development and I thought that he was crazy because at that time I was studying computer science
                        and
                        games were harder to develop than conventional programs. </p>
                </Parallax>
                <Parallax
                    opacity={[
                        -0.5,
                        1,
                        'ease'
                    ]}
                >
                    <p> After months working in the web2 world we saw an opportunity in the crypto space and we jumped
                        in,
                        working 8 hours a day on regular tasks and another 4-5 hours learning solidity and web3 to try
                        to
                        grasp the full picture of the potential and the possibilities that blockchain brings. </p>
                </Parallax>
                <Parallax
                    opacity={[
                        -0.5,
                        1,
                        'ease'
                    ]}
                >
                    <p> Developing smart contracts and dreaming about what type of games and products we could bring to
                        this
                        space. We start building a game called Cryptodungeons in 2018 with heroes that were sent on
                        missions
                        to collect items to craft even cooler items like weapons and gear. With an in-game market we
                        were in
                        the beginning of something great til the bear market hit us so hard that we almost forgot about
                        Ethereum. We regrouped and refocus our attention again in web2 working countless hours and being
                        poorly paid compared to our friends in unicorn companies.</p>
                </Parallax>
                <Parallax
                    opacity={[
                        -0.5,
                        1,
                        'ease'
                    ]}
                >
                    <p> We learnt that sometimes we have to make friends and connections to go even further and with
                        Sean
                        Keith, Frances and Chase we definitely achieved that. We are older and wiser with some refreshed
                        vision of what we can do and with who we want to build. So we got here, to Exothium, the
                        foundation
                        for creative work, collaboration and fun for anyone in the community. For the writter that wants
                        to
                        see their story on Exothium, the artist that wants to see their creation gain life or the
                        developer
                        that wants to create something that connects us. </p>
                </Parallax>
                {/*<p> Can we make it? Can we jump on a train of something new?</p>*/}
            </div>
            <div className='howItStartedAuthor'>
                <p>Hugo.Eth</p>
            </div>
        </div>
    );
}

export default HowItStarted;