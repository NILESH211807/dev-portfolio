import Image from "next/image";

export default function Loading() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Image
                className="animate-spin [animation-duration:2s]"
                width={200}
                height={200} src="https://ik.imagekit.io/9kvz9l4o8/project/icon.png" alt="loading" />
        </div>
    )
}