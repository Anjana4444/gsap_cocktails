import React from 'react'
import Navbar from './Components/Navbar';

import { ScrollTrigger, SplitText } from 'gsap/all';

import gsap from 'gsap';
import Hero from './Components/Hero';
import Cocktails from './Components/Cocktails';
import About from './Components/About';
gsap.registerPlugin(ScrollTrigger, SplitText);

const app = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About/>

        </main>
    )
}

export default app
