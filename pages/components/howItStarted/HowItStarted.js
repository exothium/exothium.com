import React, { useState } from "react";
import { Parallax, useParallaxController } from "react-scroll-parallax";
import ShowMoreText from "react-show-more-text";


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
                    -20,
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
                        maxWidth: '75%'
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
            <Parallax
                opacity={[
                    -0.5,
                    1,
                    'ease'
                ]}
            >
                <ShowMoreText
                    /* Default options */
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="showMoreWrapper"
                    anchorClass="my-anchor-css-class"
                    expanded={false}
                    truncatedEndingComponent={"... "}
                >
                    <div className='howItStartedText'>
                        <Parallax
                            opacity={[
                                0.5,
                                1,
                                'ease'
                            ]}
                        >
                            <p> More than 10 years ago I met <a target="_blank"
                                                                href="https://www.linkedin.com/in/angelo-bastos-87b653152/">Angelo</a>
                                . He was at that time an architecture student, changing his
                                career path to pursue game development. At first I thought he was crazy, due to the fact
                                that at
                                the time I was studying computer science and games were considerably harder to develop
                                than
                                conventional programs. </p>
                        </Parallax>
                        <Parallax
                            opacity={[
                                0.5,
                                1,
                                'ease'
                            ]}
                        >
                            <p> After many months working in the web2 world, we saw an opportunity in the crypto space
                                and
                                of
                                course, jumped in. We usually spent 8 hours a day on regular tasks and another 4-5 hours
                                learning solidity and web3, in an effort to grasp the potential and possibilities that a
                                new
                                technology like blockchain, brings to the table.
                                We openly spent a lot time day dreaming about what type of games and products we could
                                bring
                                to
                                this space. </p>
                        </Parallax>
                        <Parallax
                            opacity={[
                                0.5,
                                1,
                                'ease'
                            ]}
                        >
                            <p> In 2018 we started building a game called <a target="_blank"
                                                                             href="https://medium.com/the-notice-board/exclusive-to-bitguild-cryptodungeons-1719a3f09910">CryptoDungeons</a>.
                                It’s main mechanic was centered around
                                the control of your own hero, that could for example be sent on missions, to collect
                                items
                                and
                                craft cool new items, like weapons and gear. With an in-game market, we were hopeful
                                that
                                this
                                was the beginning of something great, until unfortunately, the bear market hit us so
                                hard
                                that
                                we almost forgot about Ethereum. We had to “regroup” and refocus our attention again in
                                web2,
                                working countless hours while being poorly paid, in comparison to some of our friends in
                                unicorn
                                companies. </p>
                        </Parallax>
                        <Parallax
                            opacity={[
                                0.5,
                                1,
                                'ease'
                            ]}
                        >
                            <p> We had to learn that sometimes we have to make friends and connections, to go even
                                further,
                                and
                                with Sean Keith, Frances and Chase we definitely achieved that. We are older, wiser and
                                with
                                a
                                refreshed vision of what we can build and with who we want to do it.
                                And this is how we got here, to Exothium, the foundation for creative work,
                                collaboration
                                and
                                fun for everyone in the community. For the writter that wants to see their story
                                realized,
                                the
                                artist that wants to see their creation come to life or the developer that wants to
                                create
                                something that connects us all. </p>
                        </Parallax>
                        {/*<p> Can we make it? Can we jump on a train of something new?</p>*/}
                    </div>
                </ShowMoreText>
            </Parallax>
            <Parallax
                opacity={[
                    0,
                    1,
                    'ease'
                ]}
            >
                <div className='howItStartedAuthor'>
                    by <a target="_blank" href="https://www.linkedin.com/in/hugo-freire-a37127115/">hugo.eth</a>
                </div>
            </Parallax>
        </div>
    );
}

export default HowItStarted;