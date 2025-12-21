import React from 'react'
import Navbar from './Components/Navbar';

import { ScrollTrigger, SplitText } from 'gsap/all';

import gsap from 'gsap';
import Hero from './Components/Hero';
import Cocktails from './Components/Cocktails';
gsap.registerPlugin(ScrollTrigger, SplitText);

const app = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />

        </main>
    )
}

export default app
