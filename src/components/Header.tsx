"use client";
import Link from "next/link";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BlurFade } from "./ui/blur-fade";

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Projects', href: '/#projects' },
    ]

    return (
        <header className="w-full h-[70px] border-b fixed top-0 left-0 z-50 backdrop-blur-xl">
            <div className="w-full max-w-[1400px] my-0 mx-auto h-full flex items-center justify-between px-10 max-sm:px-3 relative">
                <h1 className="text-2xl font-bold">Nilesh Paswan</h1>
                <nav className={`min-lg:absolute min-lg:top-1/2 min-lg:left-1/2 min-lg:-translate-x-1/2 min-lg:-translate-y-1/2 max-lg:fixed max-lg:w-full max-lg:h-screen max-lg:bg-background max-lg:top-0 max-lg:right-0 max-lg:transition-transform duration-300 ease-in-out ${isNavOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-full'}`}>
                    <span className="min-lg:hidden absolute top-10 right-10 cursor-pointer hover:text-primary transition-all ease-in-out duration-150 active:scale-95 active:rotate-90"
                        onClick={() => setIsNavOpen(false)}>
                        <X size={40} />
                    </span>
                    <ul className="flex gap-6 ml-auto max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-8 max-lg:w-full max-lg:h-full">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsNavOpen(false)}
                                    className="text-[16px] font-semibold tracking-wider transition-color ease-in duration-100 uppercase hover:text-primary active:scale-95 max-lg:text-2xl">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex gap-5 max-sm:gap-3 items-center">
                    <AnimatedThemeToggler className="cursor-pointer" />
                    <div className="lg:hidden cursor-pointer hover:text-primary transition-all ease-in-out duration-150 active:scale-95 active:-rotate-90"
                        onClick={() => setIsNavOpen(true)}>
                        <Menu size={25} />
                    </div>
                </div>
            </div>
        </header>
    )
}