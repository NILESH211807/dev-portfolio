"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { Download } from "lucide-react";

export default function Hero() {

    return (
        <div className="w-full min-h-screen p-10 max-sm:p-3 max-w-[1400px] mx-auto my-0">
            <div className="w-full min-h-screen relative max-md:flex max-md:items-center max-md:flex-col">
                <div className="w-full h-full absolute inset-0 z-0 top-4 max-lg:top-20">
                    <h1 className="text-[17rem] select-none font-extrabold uppercase text-[#fafafa] dark:text-[#18161d] tracking-tight font1 max-xl:text-[20vw] leading-none">Web</h1>
                    <h1 className="text-[17rem] select-none font-extrabold uppercase text-[#fafafa] dark:text-[#18161d] tracking-tight font1 max-xl:text-[20vw] leading-none">Developer</h1>
                </div>
            </div>

            <div className="w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] p-10 max-sm:p-3">
                <div className="w-full flex flex-col items-end mt-8 max-sm:items-center">
                    <div className="relative">
                        <BlurFade delay={0.25} inView>
                            <h1 className="text-7xl font-extrabold font2 uppercase max-md:text-6xl max-md:text-center max-sm:text-6xl max-[520px]:!text-[40px]">
                                Nilesh Paswan
                            </h1>
                        </BlurFade>
                        <div className="flex flex-col items-start max-sm:items-center">
                            <BlurFade delay={0.35} inView>
                                <h2 className="text-md tracking-[3px] text-foreground/70 font-medium mt font3 uppercase max-sm:my-2 max-sm:text-sm max-[500px]:tracking-wider max-sm:text-center">
                                    <span className="font-bold text-center">Simple thinking.</span> Seamless building.
                                </h2>
                            </BlurFade>
                            <BlurFade delay={0.45} inView className="w-full max-sm:flex max-sm:items-center max-sm:justify-center">
                                <div className="w-full max-w-xl h-[2px] bg-primary min-sm:mt-2 rounded-full max-md:max-w-[80%]"></div>
                            </BlurFade>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center flex-col justify-center mt-12">
                    <BlurFade delay={0.55} inView>
                        <p className="font2 text-md max-w-2xl text-foreground/80 font-medium text-left max-md:text-center max-sm:text-md">Hi, I’m Nilesh Paswan a Full-Stack Developer passionate about building clean, scalable, and user-friendly web applications. With expertise in React, Node.js, Express, and MongoDB, I craft digital solutions that blend simplicity with performance. I enjoy turning ideas into seamless experiences that truly make an impact.</p>
                    </BlurFade>

                    <div className="mt-10 flex items-center gap-5 max-sm:flex-col max-sm:w-full">
                        <BlurFade delay={0.65} inView className="max-sm:w-full flex items-center justify-center">
                            <button className="text-md px-10 py-3 font-bold uppercase tracking-wider cursor-pointer rounded border-2 transition-all ease-in-out duration-300 active:scale-95 max-sm:w-[90%] max-sm:py-4">View My Works</button>
                        </BlurFade>
                        <BlurFade delay={0.75} inView className="max-sm:w-full flex items-center justify-center">
                            <button className="text-white text-md px-10 py-3 font-bold uppercase tracking-wide cursor-pointer rounded inline-flex items-center border-2 border-transparent bg-primary shine-button transition-all ease-in-out duration-300 active:scale-95 max-sm:w-[90%] max-sm:justify-center max-sm:py-4">Download CV
                                <Download className="ml-3" size={20} strokeWidth={2.30} />
                            </button>
                        </BlurFade>
                    </div>
                </div>
            </div>

        </div>
    )
}