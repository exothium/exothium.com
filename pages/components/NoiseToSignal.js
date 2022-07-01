import React, { useRef, useEffect, useState } from 'react'

const NoiseToSignal = props => {

    const canvasRef = useRef(null);

    const [windowAux, setWindow] = useState();

    useEffect(() => {
        setWindow(window);
        const canvas = canvasRef.current;
        x = canvas.getContext('2d')
        x.canvas.width = window.innerWidth;
        x.canvas.height = window.innerWidth / 6;//window.innerHeight;
        sinHz = window.innerWidth < 1900 ? (1 - (window.innerWidth / 1900)) + 1 : 1;
        //alert(sinHz);
        //x = context;
        let frameCount = -1;
        let animationFrameId;


        // setGradient
        let gradient = x.createLinearGradient(0, 0, 220, 0);

        // Add three color stops
        gradient.addColorStop(0, '#a1035b');
        gradient.addColorStop(0.9, '#ef5825');
        gradient.addColorStop(1, '#ef5825');

        // Set the fill style and draw a rectangle
        x.fillStyle = gradient;
        x.fillRect(0, 0, 200, 1);

        //Our draw came here
        const render = () => {
            frameCount++
            draw(x, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, []);

    let c;
    let x;

    let time = 0;
    //let frame = 0;
    let colors = [];
    let d = [];

    const S = Math.sin;
    const C = Math.cos;
    const T = Math.tan;

    let sinHz = 1.0;
    const R = function R(r, g, b, a) {
        a = a === undefined ? 1 : a;

        return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a + ")";
    };


    const draw = (x, frame) => {
        //x.clearRect(0, 0, x.canvas.width, x.canvas.height)
        // x.fillStyle = '#000000'
        // x.beginPath()
        // x.arc(50, 100, 20*Math.sin(frame*0.05)**2, 0, 2*Math.PI)
        // x.fill()
        time = frame / 60;

        if (time * 60 | 0 == frame - 1) {
            time += 0.000001;
        }

        //console.log("draw");
        //frame++;
        u(time);
    }

    function u(t) {

        //console.log(t);
        let q = () => (Math.random() * 99) | 0;
        let z = q;
        let alpha = 0;
        if (!t) {
            //let d=[];

            for (let i = 99; i--;) {
                d[i] = i
                // debugger;
                colors[i] = x.getImageData((i) * 2, 0, 1, 1).data;
                // x.fillRect((i+10)*2, 20, 1, 1);
                // x.fillStyle = 'green';
                alpha = alpha + 0.051;
                colors[i][3] = alpha;
            }


        }

        for (let count = 0; count < d.length; count++) {
            q = d[count];
            //for(q of d){
            x.fillRect(t * 129 / sinHz, S(q + t * sinHz) * 99 + 110, 3, 3);
            d[q = z()] = (d[z()] + d[q] * 80) / 81;
            x.fillStyle = R(colors[count][0], colors[count][1], colors[count][2], colors[count][3]);
            //x.fillStyle = "white";
            //count++;
        }
    }

    return (<div>
            <div
                style={{
                    width: "200px",
                    height: '2px',
                    backgroundColor: "#121212",
                    position: "relative",
                    marginBottom: '-2px'
                }}/>
            <canvas ref={canvasRef} {...props} height={windowAux ? windowAux.innerWidth / 6 : 0}/>

        </div>
    )
}

export default NoiseToSignal