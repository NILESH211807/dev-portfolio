"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function AboutMe() {

    const aboutDescContainer = useRef<HTMLDivElement>(null);
    const aboutHeadingRef = useRef<HTMLDivElement>(null);
    const aboutDescRefs = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        SplitText.create(aboutHeadingRef.current, {
            type: "chars",
            linesClass: "split-line",
            autoSplit: true,
            onSplit: (instance) => {
                return gsap.from(instance.chars, {
                    scrollTrigger: {
                        trigger: aboutHeadingRef.current,
                        scrub: true,
                        start: "top 80%",
                        end: "bottom 50%",
                        toggleActions: "play none none reverse",
                    },
                    duration: 1,
                    ease: "back.in",
                    opacity: 0.1,
                    stagger: 0.03,
                });
            }
        })

        const split = new SplitText(aboutDescRefs.current, {
            type: "words,chars",
            linesClass: "split-line"
        });

        const anim = gsap.from(split.chars, {
            scrollTrigger: {
                trigger: aboutDescContainer.current,
                start: "top 0%",
                end: "bottom 40%",
                scrub: true,
                pin: true,
                toggleActions: "play none none reverse",
            },
            duration: 0.8,
            ease: "back.in",
            opacity: 0.3,
            stagger: 0.03,
        });

        return () => {
            anim.kill();
            split.revert();
        };
    }, [])


    return (
        <div className="w-full h-screen relative border-t" ref={aboutDescContainer}>
            <h1 className="text-[20rem] font-bold text-[#f3f3f3] dark:text-[#1a181f] tracking-tight font1 max-xl:text-[35vw] leading-none absolute left-10 top-[40%] -translate-y-1/2 select-none max-sm:left-3 uppercase">About Me</h1>

            <div className="w-full relative my-10 p-10 max-sm:p-3">
                <h1 ref={aboutHeadingRef} className="text-[8rem] max-xl:text-[20vw]  font-bold tracking-tight font1 leading-none">
                    About <span className="font-medium">Me</span>
                </h1>

                <div className="w-full relative my-14">
                    <p ref={aboutDescRefs} className="max-w-4xl text-left text-xl tracking-wide max-sm:font-medium max-sm:text-[18px]">Hi, I’m Nilesh Paswan, a Full-Stack Web Developer with a passion for creating clean, scalable, and user-friendly applications. Beyond just writing code, I focus on building solutions that deliver real value, solve problems, and provide a seamless experience for users.</p>


                    <h2 className="mt-8 mb-4 text-2xl uppercase font-bold tracking-wide max-sm:text-center max-sm:mb-5">Connect with Me</h2>
                    <div className="flex items-center gap-5 max-sm:justify-center">
                        <Link
                            href={"#"}
                            className="p-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                            <Github size={30} color="#fff" />
                        </Link>

                        <Link
                            href={"#"}
                            className="p-2 bg-blue-700 rounded flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
                            <Linkedin size={30} color="#fff" />
                        </Link>

                        <Link
                            href={"#"}
                            className="p-2 bg-black rounded flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                            <svg
                                viewBox="0 0 512 512"
                                height="1.7em"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                            >
                                <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                ></path>
                            </svg>
                        </Link>


                        <Link
                            href={"#"}
                            className="p-2 instabg rounded flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                            <Instagram size={30} color="#fff" />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}