import React from 'react'
import Navbar from './Components/Navbar';

import { ScrollTrigger, SplitText } from 'gsap/all';

import gsap from 'gsap';
import Hero from './Components/Hero';
gsap.registerPlugin(ScrollTrigger, SplitText);

const app = () => {
    return (
        <main>
            <Navbar />
            <Hero />

        </main>
    )
}

export default app
