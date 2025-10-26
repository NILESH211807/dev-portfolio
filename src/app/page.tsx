"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';
import Skills from "@/pages/Skills";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import HeroPage from "@/pages/HeroPage";
import Contact from '@/pages/Contact';

export default function Home() {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            // "smooth" is removed; now everything is smooth by default
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);


    return (
        <div className="w-full min-h-screen max-w-[1400px] mx-auto my-0">
            <Header />
            <HeroPage />
            {/* <Hero /> */}
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
