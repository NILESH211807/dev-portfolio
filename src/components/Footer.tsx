"use client";
export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center border-t-2 py-10 rounded-t-3xl max-sm:py-5 text-center max-sm:px-5 max-sm:text-sm max-sm:font-semibold">
            <p className="text-[18px] font-light">{`Copyright © ${new Date().getFullYear()} Nilesh Paswan. All rights reserved.`}</p> <br />
        </footer>
    )
}