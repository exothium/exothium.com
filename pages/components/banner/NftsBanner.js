import {Parallax, ParallaxBanner, useParallaxController} from "react-scroll-parallax";
import React from "react";
import Button from "../common/Button";

function nftsBanner() {
    const parallaxController = useParallaxController();
    const handleLoad = () => {
        parallaxController.update();
    }

    return (<div className='BannerContainer'>
        <Parallax
            opacity={[0, 1, 'easeInBack']}
            rootMargin={{top: 0, right: 0, bottom: -750, left: 0}}
        >
            <div id={'nftsBannerOverlay'}>
                <img
                    src={'./assets/banners/nftsBanner.png'}
                    alt="banner"
                    style={{
                        width: '100%', display: 'flex', position: 'relative', zIndex: -1,
                    }}
                    onLoad={handleLoad}
                />
                <div className={'nftsBannerWrapper'}>
                    <div className='nftsBannerWrapperChild'>
                        <Parallax
                            scale={[0, 1, 'easeOut']}
                            opacity={[0, 1, 'easeInCubic']}
                            rootMargin={{top: 1000, right: 100, bottom: -500, left: 100}}
                        >
                            <div className='nftsBannerTitle'>
                                NFTS
                            </div>
                        </Parallax>
                        <div className='nftsBannerBottomDiv'>
                            <Parallax
                                translateX={['100%', '0%', 'easeOut']}
                                opacity={[0, 1, 'easeInCubic']}
                                rootMargin={{top: 0, right: 100, bottom: -500, left: 100}}
                            >
                            <span className='nftsBannerDescription'>
                                ExoWorld offers a wide range of NFT combinations for players to collect and trade.
                                With over 15,552 possible combinations, there is sure to be something for everyone.
                                Additionally, we will be releasing a limited edition run of 5,000 mintable NFTs.
                                Please note that these NFTs are only available to players on the blockchain mode of Exothium (Yin) and are not available for the free version of Exothiums spawned games (Yang).
                            </span>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    </div>)
}

export default nftsBanner;
