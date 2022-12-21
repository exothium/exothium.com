import {Parallax, ParallaxBanner, useParallaxController} from "react-scroll-parallax";
import React from "react";
import Button from "../common/Button";

function exoWorldBanner() {
    const parallaxController = useParallaxController();
    const handleLoad = () => {
        parallaxController.update();
    }

    return (<div className='BannerContainer'>
        <Parallax
            opacity={[0, 1, 'easeInBack']}
            rootMargin={{top: 0, right: 0, bottom: -750, left: 0}}
        >
            <div id={'exoWorldBannerOverlay'}>
                <img
                    src={'./assets/banners/exoWorldBanner.png'}
                    alt="banner"
                    style={{
                        width: '100%', display: 'flex', position: 'relative', zIndex: -1,
                    }}
                    onLoad={handleLoad}
                />
                <div className={'exoWorldBannerWrapper'}>
                    <div className='exoWorldBannerWrapperChild'>
                        <Parallax
                            scale={[0, 1, 'easeOut']}
                            opacity={[0, 1, 'easeInCubic']}
                            rootMargin={{top: 1000, right: 100, bottom: -500, left: 100}}
                        >
                            <div className='exoWorldBannerTitle'>
                                ExoWorld
                            </div>
                        </Parallax>
                        <div className='exoWorldBannerBottomDiv'>
                            <Parallax
                                translateX={['-100%', '0%', 'easeOut']}
                                opacity={[0, 1, 'easeInCubic']}
                                rootMargin={{top: 0, right: 100, bottom: -500, left: 100}}
                            >
                            <span className='exoWorldBannerDescription'>
                                ExoWorld is the first spawned at the heart of the Exothium Community. In this game you'll get the chance to explore a vast and varied world as one of our four unique races.
                                Endless possibilities and adventures await you in ExoWorld, with new features and content added with each season of the game. There will always be something new to discover and enjoy in ExoWorld!
                            </span>
                            </Parallax>
                            <div className='exoWorldBannerButton'>
                                <Button text={'Learn More'} shadowDirection={'bottomLeft'}
                                        href='https://world.exothium.com/'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    </div>)
}

export default exoWorldBanner;
