import { BlurFade } from "@/components/ui/blur-fade";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroPage() {
    return (
        <div className="min-h-screen w-full relative max-sm:min-h-[90vh]">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(circle at 20% 20%, rgba(98, 43, 187, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(165, 0, 59, 0.11) 0%, transparent 40%), linear-gradient(120deg, var(--background) 0%, var(--background) 100%)"
                }}
            />

            {/* absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] */}
            <div className="w-full  px-10 max-sm:px-3">
                <div className="w-full flex items-center flex-col justify-center  pt-40">
                    <BlurFade delay={0.25} inView >
                        <h1 className="text-7xl dark:text-white from-[#7a4ad9] to-[#3d1b81] bg-clip-text text-transparent bg-gradient-to-br font-extrabold font2 uppercase max-md:text-6xl max-md:text-center max-sm:text-6xl max-[520px]:!text-[40px]">
                            Nilesh Paswan
                        </h1>
                    </BlurFade>
                    <BlurFade delay={0.35} inView >
                        <h2 className="text-md my tracking-[3px] text-foreground/70 font-medium mt font3 uppercase max-sm:my-2 max-sm:text-sm max-[500px]:tracking-wider max-sm:text-center">
                            <span className="font-bold text-center">Full Stack.</span> Web Developer
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.55} inView>
                        <p className="font4 text-sm my-3 max-w-3xl text-foreground/80 font-medium tracking-wide text-center max-md:text-center max-sm:text-md">Hi, I’m Nilesh Paswan a Full-Stack Developer passionate about building clean, scalable, and user-friendly web applications. With expertise in React, Node.js, Express, and MongoDB, I craft digital solutions that blend simplicity with performance. I enjoy turning ideas into seamless experiences that truly make an impact.</p>
                    </BlurFade>
                    <div className="flex mt-5 gap-10 max-sm:flex-col max-sm:w-full max-sm:gap-6 max-sm:mt-8">
                        <BlurFade delay={0.65} inView className="max-sm:w-full flex items-center justify-center">
                            <Link href="/#projects" className="text-md px-10 py-3 font-bold uppercase tracking-wider cursor-pointer rounded border-2 transition-all ease-in-out active:scale-95 max-sm:w-[90%] bg-background">View My Works</Link>
                        </BlurFade>
                        <BlurFade delay={0.75} inView className="max-sm:w-full flex items-center justify-center">
                            <Link href="/resume.pdf" target="_blank" className="text-white text-md px-10 py-3 font-bold uppercase tracking-wide cursor-pointer rounded inline-flex items-center border-2 border-transparent bg-primary shine-button transition-all ease-in-out  active:scale-95 max-sm:w-[90%] max-sm:justify-center">Download CV
                                <Download className="ml-3" size={20} strokeWidth={2.30} />
                            </Link>
                        </BlurFade>
                    </div>
                </div>
            </div>
            {/* absolute -bottom-16  */}
            <BlurFade delay={0.85} inView className="w-full flex items-center justify-center max-sm:mt-10">
                <ScrollVelocityContainer className="text-[15vw] font1 uppercase font-bold text-[#e2e2e25b] dark:text-[#3e394d23] max-sm:text-8xl">
                    <ScrollVelocityRow baseVelocity={10} direction={-1}>
                        <Image src="https://ik.imagekit.io/9kvz9l4o8/project/icon.png" alt="logo"
                            className="w-[15vw] h-[15vw] max-sm:w-[96px] max-sm:h-[96px] animate-spin [animation-duration:10s] opacity-20"
                            width={100} height={100} />
                        {/* <span className="mx-3 animate-spin [animation-duration:10s]">
                            <Sparkle strokeWidth={1.25} size={'14vw'} />
                        </span> */}
                        <span className="">Web</span>
                        <Image src="https://ik.imagekit.io/9kvz9l4o8/project/icon.png" alt="logo"
                            className="w-[15vw] h-[15vw] max-sm:w-[96px] max-sm:h-[96px] animate-spin [animation-duration:10s] opacity-20"
                            width={100} height={100} />
                        {/* <span className="mx-3 animate-spin [animation-duration:10s]">
                            <Sparkle strokeWidth={1.25} size={'14vw'} />
                        </span> */}
                        <span className="">Developer</span>
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>
            </BlurFade>
        </div>
    );
}
