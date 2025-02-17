import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
// import Computers from '../components/Computers.jsx';
import Office from '../components/Office.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Leva, useControls } from 'leva';

const Hero = () => {
    const texts = [
        "Junior creative web developer",
        "MMI Student at IUT Chambery",
        "React and Three.js enthusiast",
        "Passionate learner",
    ];
    const [currentText, setCurrentText] = useState(texts[0]);
    const [textIndex, setTextIndex] = useState(0);
    const typewriterTextRef = useRef(null);
    useEffect(() => {
        const changeText = () => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCurrentText(texts[textIndex]);
        };
        const interval = setInterval(changeText, 5000);
        return () => clearInterval(interval);
    }, [textIndex]);
    useEffect(() => {
        const element = typewriterTextRef.current;
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = '';
    }, [currentText]);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Tom <span className="waving-hand">👋</span>
                </p>
                <div className="typewriter-container">
                    <p
                        className="hero_tag text-gray_gradient"
                        id="typewriter-text"
                        ref={typewriterTextRef}
                    >
                        {currentText}
                    </p>
                </div>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <Office scale={8} position={[9, -12, 0]} rotation={[0, 4.7, 0]} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
};

export default Hero;
