"use client";
import Image from "next/image";
import { MagicCard } from "./ui/magic-card";
import projectsData from "@/data/projects.json";
import { Fragment, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);


interface Project {
    id: number;
    name: string;
    description: string;
    stack: string[];
    image: string;
    link: string;
    github: string;
}

export default function Projects() {

    const projectHeadingRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const el = projectHeadingRef.current;
        const split = new SplitText(el, { type: "words,chars", linesClass: "split-line" });
        // GSAP animation
        const anim = gsap.from(split.chars, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 70%",
                toggleActions: "play none none reverse",
            },
            duration: .8,
            ease: "circ.out",
            y: 50,
            stagger: 0.03,
        });

        // projectsRef animate box on scrollTrigger
        projectsRef.current.forEach((el, i) => {
            if (!el) return;
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    end: "bottom 70%",
                    toggleActions: "play none none reverse",
                },
                duration: .8,
                ease: "circ.out",
                opacity: 0,
                y: 100,
                stagger: 0.03,
            });
        });


        return () => {
            anim.kill();
            split.revert();
            projectsRef.current.forEach((el) => {
                if (!el) return;
                gsap.killTweensOf(el);
            });
        };
    }, [])

    return (
        <div className="w-full relative border-t" id="projects">
            <h1 className="text-[18rem] uppercase font-bold text-[#fafafa] dark:text-[#18161d] tracking-tight font1 max-xl:text-[25vw] leading-none absolute left-10 top-[20%] -translate-y-1/2 select-none max-md:left-3 max-sm:top-[15%]">Projects</h1>
            <div className="w-full relative my-10 p-10 max-sm:p-3 max-lg:p-5">
                <h1 ref={projectHeadingRef} className="text-[6rem] max-xl:text-[12vw] font-semibold tracking-tight font1 leading-none">
                    Projects
                </h1>

                <div className="w-full grid grid-cols-2 gap-5 mt-16 max-[880px]:grid-cols-1">
                    {
                        projectsData?.map((project: Project, i) => (
                            <div key={project.id}
                                ref={(el) => {
                                    projectsRef.current[i] = el
                                }}>
                                <MagicCard className="shadow-lg rounded-md">
                                    <div className="min-md:p-3 max-md:p-2">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            width={480}
                                            height={320}
                                            unoptimized={true}
                                            className="w-full h-80 object-cover rounded-md max-md:h-60" />
                                        <h1 className="mt-4 text-2xl font-medium max-sm:text-xl max-sm:font-bold">{project.name}</h1>
                                        <p className="text-[15px] font-light my-3 opacity-80 max-sm:text-[16px] max-sm:font-semibold max-sm:text-sm">{project?.description?.slice(0, 200) + "..."}</p>
                                        <div className="flex flex-wrap my-3 items-center gap-3 max-sm:gap-2">
                                            {
                                                project.stack.map((tech: string) => (
                                                    <span key={tech} className="bg-background rounded-full px-3 py-1 text-sm font-medium border cursor-pointer ">{tech}</span>
                                                ))
                                            }
                                        </div>

                                        <div className="flex items-center gap-5 mt-5 max-sm:mb-2 max-sm:gap-3">
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="text-[14px] px-8 py-2 font-semibold tracking-wide cursor-pointer rounded-full inline-flex items-center border-2 border-transparent bg-primary shine-button transition-all ease-in-out duration-300 active:scale-95 max-sm:w-[90%] max-sm:justify-center max-sm:py-3 max-sm:px-2 max-sm:text-sm text-white">
                                                Live Demo
                                            </Link>
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="text-[14px] px-8 py-2 font-semibold tracking-wide cursor-pointer rounded-full inline-flex items-center border-2 transition-all ease-in-out duration-300 active:scale-95 max-sm:w-[90%] max-sm:justify-center max-sm:py-3 max-sm:px-2 max-sm:text-sm">
                                                Github
                                            </Link>
                                        </div>
                                    </div>
                                </MagicCard>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
