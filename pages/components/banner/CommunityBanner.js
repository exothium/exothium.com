import {Parallax, ParallaxBanner, useParallaxController} from "react-scroll-parallax";
import React from "react";
import Button from "../common/Button";

function communityBanner() {
    const parallaxController = useParallaxController();
    const handleLoad = () => {
        parallaxController.update();
    }

    return (<div className='BannerContainer'>
        <Parallax
            opacity={[0, 1, 'easeInBack']}
            rootMargin={{top: 0, right: 0, bottom: -750, left: 0}}
        >
            <div id={'communityBannerOverlay'}>
                <img
                    src={'./assets/banners/communityBanner.png'}
                    alt="banner"
                    style={{
                        width: '100%', display: 'flex', position: 'relative', zIndex: -1,
                    }}
                    onLoad={handleLoad}
                />
                <div className={'communityBannerWrapper'}>
                    <div className='communityBannerWrapperChild' >
                        <Parallax
                            scale={[0, 1, 'easeOut']}
                            opacity={[0, 1, 'easeInCubic']}
                            rootMargin={{top: 1000, right: 100, bottom: -500, left: 100}}
                        >
                            <div className='communityBannerTitle'>
                                Community Driven
                            </div>
                        </Parallax>
                        <div className='communityBannerBottomDiv'>
                            <Parallax
                                translateX={['100%', '0%', 'easeOut']}
                                opacity={[0, 1, 'easeInCubic']}
                                rootMargin={{top: 0, right: 100, bottom: -500, left: 100}}
                            >
                            <span className='communityBannerDescription'>
                                From ancient legends to modern myths, our community has a wealth of stories waiting to be discovered.
                                Contribute to the stories, myths and legends that will reflect the values, beliefs and culture of the community.
                                Join us on a journey through the rich tapestry of tales that have been passed down through generations, each one more exciting and awe-inspiring than the last. Whether you're a seasoned veteran or a newcomer to the world of community-driven lore, there's always something new to discover and enjoy.
                            </span>
                            </Parallax>
                            {/*<div className='communityBannerButton'>
                                <Button text={'Learn More'} shadowDirection={'bottomRight'}
                                        href='https://world.exothium.com/'/>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    </div>)
}

export default communityBanner;
