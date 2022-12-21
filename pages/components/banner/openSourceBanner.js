import {Parallax, ParallaxBanner, useParallaxController} from "react-scroll-parallax";
import React from "react";
import Button from "../common/Button";

function openSourceBanner() {
    const parallaxController = useParallaxController();
    const handleLoad = () => {
        parallaxController.update();
    }

    return (<div className='BannerContainer'>
        <Parallax
            opacity={[0, 1, 'easeInBack']}
            rootMargin={{top: 0, right: 0, bottom: -750, left: 0}}
        >
            <div id={'openSourceBannerOverlay'}>
                <img
                    src={'./assets/banners/openSourceBanner.png'}
                    alt="banner"
                    style={{
                        width: '100%', display: 'flex', position: 'relative', zIndex: -1,
                    }}
                    onLoad={handleLoad}
                />
                <div className={'openSourceBannerWrapper'}>
                    <div className='openSourceBannerWrapperChild'>
                        <Parallax
                            scale={[0, 1, 'easeOut']}
                            opacity={[0, 1, 'easeInCubic']}
                            rootMargin={{top: 1000, right: 100, bottom: -500, left: 100}}
                        >
                            <div className='openSourceBannerTitle'>
                                Resources
                            </div>
                        </Parallax>
                        <div className='openSourceBannerBottomDiv'>
                            <Parallax
                                translateX={['-100%', '0%', 'easeOut']}
                                opacity={[0, 1, 'easeInCubic']}
                                rootMargin={{top: 0, right: 100, bottom: -500, left: 100}}
                            >
                            <span className='openSourceBannerDescription'>
                                Exothium is an open source project, which means that all of its components – including its code, content, and assets – are freely available for anyone to access, use, and modify. This allows for a high level of transparency and collaboration within the Exothium community, as well as the opportunity for others to contribute and improve upon the project.
                            </span>
                            </Parallax>
                            <div className='openSourceBannerButton'>
                                <Button text={'Learn More'} shadowDirection={'bottomLeft'}
                                        href='https://github.com/exothium'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    </div>)
}

export default openSourceBanner;
