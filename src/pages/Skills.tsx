"use client";

import { SkillsList } from "@/components/SkillsList";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);


export default function Skills() {

    const skillsMainContainerRef = useRef(null);
    const skillsDescRef = useRef(null);
    const skillsDescContainerRef = useRef(null);
    const skillsHeadingRef = useRef(null);

    useGSAP(() => {
        const el = skillsHeadingRef.current;
        const split = new SplitText(el, { type: "words,chars", linesClass: "split-line" });
        // GSAP animation
        const anim = gsap.from(split.chars, {
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 70%",
                toggleActions: "play none none reverse",
            },
            duration: .5,
            ease: "circ.out",
            y: 100,
            stagger: 0.03,
        })

        // skillsDescRef
        SplitText.create(skillsDescRef.current, {
            type: "words,lines",
            mask: "lines",
            linesClass: "line",
            autoSplit: true,
            onSplit: (instance) => {
                return gsap.from(instance.lines, {
                    yPercent: 120,
                    stagger: .1,
                    scrollTrigger: {
                        trigger: skillsDescContainerRef.current,
                        scrub: true,
                        start: "top 80%",
                        end: "bottom 60%"
                    }
                });
            }
        });

        // Cleanup on unmount
        return () => {
            anim.kill();
            split.revert();
        };
    }, [])

    return (
        <div className="w-full relative border-t mt-12" id="skills">
            <h1 className="text-[35rem] font-bold text-[#fafafa] dark:text-[#18161d] tracking-tight font1 max-xl:text-[40vw] leading-none absolute left-10 top-[30%] -translate-y-1/2 select-none max-sm:left-3">Skills</h1>
            <div className="w-full relative my-10 p-10 max-sm:p-3" ref={skillsMainContainerRef}>
                <div className="w-full h-full flex justify-start">
                    <h1 className="text-[6rem] max-xl:text-[20vw]  font-bold tracking-tight font1 leading-none" ref={skillsHeadingRef}>
                        Skills
                    </h1>
                </div>

                <div className="mt-12">
                    <SkillsList />
                    <div className="mt-20 flex justify-center" ref={skillsDescContainerRef}>
                        <p className="max-w-4xl text-center text-xl opacity-80 tracking-wide max-sm:font-medium max-sm:text-[18px]" ref={skillsDescRef}>
                            I specialize in full-stack web development with the MERN stack — MongoDB, Express.js, React.js, and Node.js. My expertise includes building scalable APIs, integrating third-party services, and creating seamless front-end experiences with React and Tailwind CSS. I have strong experience in performance optimization, SEO, and modern development tools like GitHub and React Helmet. From responsive UI design to backend logic, I deliver end-to-end solutions that are clean, efficient, and user-focused.
                        </p>
                    </div>

                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-22">
                        <ScrollVelocityContainer className="text-7xl font1 uppercase font-bold">
                            <ScrollVelocityRow baseVelocity={20} direction={1}>
                                <span className="transparent-text ml-5">Simple</span>
                                <span className="text-primary ml-5">Smart</span>
                                <span className="ml-5">Scalable</span>
                            </ScrollVelocityRow>
                            <ScrollVelocityRow baseVelocity={20} direction={-1}>
                                <span className="ml-5 text-primary">Clean</span>
                                <span className="ml-5">Creative</span>
                                <span className="ml-5 transparent-text">Code</span>
                            </ScrollVelocityRow>
                        </ScrollVelocityContainer>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
