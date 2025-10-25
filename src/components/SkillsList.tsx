import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import Image from "next/image";

const techlist = [
    {
        name: "HTML",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/html5.svg",
    },
    {
        name: "CSS",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/css3.svg",
    },
    {
        name: "React",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/react.svg",
    },
    {
        name: "Next.js",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/nextjs.svg",
    },
    {
        name: "Tailwind",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/tailwindcss.svg",
    },
    {
        name: "Javascript",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/javascript.svg",
    },
    {
        name: "Typescript",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/typescript.svg",
    },
    {
        name: "Node.js",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/node.svg",
    },
    {
        name: "MongoDB",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/mongodb.svg",
    },


    {
        name: "Github",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/github.svg",
    },
    {
        name: "Vercel",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/vercel.svg",
    },
    {
        name: "Netlify",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/netlify.svg",
    },
    {
        name: "Figma",
        img: "https://ik.imagekit.io/9kvz9l4o8/icons/figma.svg",
    },
    {
        "name": "Postman",
        "img": "https://ik.imagekit.io/9kvz9l4o8/icons/postman.svg",
    },
    {
        "name": "seo",
        "img": "https://ik.imagekit.io/9kvz9l4o8/icons/seo3.svg",
    },
    {
        "name": "VSCode",
        "img": "https://ik.imagekit.io/9kvz9l4o8/icons/vscode.svg",
    },
    {
        "name": "api",
        "img": "https://ik.imagekit.io/9kvz9l4o8/icons/api.svg",
    }

]

const firstRow = techlist.slice(0, 8);
const secondRow = techlist.slice(9, 15);


const ReviewCard = ({
    img,
    name
}: {
    img: string;
    name: string;
}) => {
    return (

        <figure className={cn(
            "relative h-full cursor-pointer overflow-hidden rounded-xl border p-4 hover:dark:shadow-[0_0px_10px_#3D1B81]",
            // light styles
            "border-gray-950/[.1] bg-background hover:bg-gray-950/[.05]",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}>
            <Image width={50} height={50} src={img} alt={name} />
        </figure>
    );
};

export function SkillsList() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover={false} className="[--duration:20s]">
                {firstRow.map((item) => (
                    <ReviewCard key={item.name} {...item} />
                ))}
            </Marquee>
            <Marquee pauseOnHover={false} className="[--duration:20s]">
                {secondRow.map((item) => (
                    <ReviewCard key={item.name} {...item} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
