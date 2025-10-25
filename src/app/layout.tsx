import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, Montserrat, Oswald, } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bricolageGrotesque = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const oswald = Oswald({
    variable: "--font-oswald",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
});

const DMSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
    title: "Nilesh Paswan || Full Stack Developer",
    description: "Full Stack Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${bricolageGrotesque.variable} ${oswald.variable} ${DMSans.variable} antialiased`}
            >
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
