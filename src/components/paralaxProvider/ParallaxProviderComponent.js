import React, { useState, useEffect } from 'react';
import App from "../../App";
import { useParallax, useParallaxController, Parallax, ParallaxProvider } from 'react-scroll-parallax';



function ParallaxProviderComponent() {

    return (
        <ParallaxProvider>
            <App/>
        </ParallaxProvider>
    );
}

export default ParallaxProviderComponent;
