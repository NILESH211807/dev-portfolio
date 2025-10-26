"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";


const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters")
        .max(20, "Name must be at most 20 characters")
        .matches(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces")
        .trim(),
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email is required")
        .trim()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"),
    message: yup
        .string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(500, "Message must be at most 500 characters")
        .trim()
        .matches(/^[a-zA-Z0-9\s.,!?]+$/, "Message must contain only letters, numbers, and common punctuation marks"),
});

export default function Contact() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(formSchema) });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data: object) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "04bb0d11-7bf1-4114-b1dd-12c94a1c4fc8",
                    ...data
                }),
            });

            const result = await response.json();
            if (result.success) {
                toast.success("Message sent successfully!");
                reset(); // Reset the form after successful submission
            } else {
                toast.error(result?.message || "Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="w-full relative border-t" id="contact">
            <h1 className="text-[18rem] uppercase font-bold text-[#fafafa] dark:text-[#18161d] tracking-tight font1 max-xl:text-[25vw] leading-none absolute left-10 top-[30%] -translate-y-1/2 select-none max-md:left-3 max-sm:top-[15%]">Contact</h1>

            <div className="max-w-2xl mx-auto relative z-50 p-5 max-sm:p-3">
                <h1 className="text-4xl font-bold text-center mt-20 mb-10 tracking-wide">Contact Me</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full my-5">
                    <input
                        type="text"
                        className="font-semibold text-[18px] tracking-wide border bg-var(--card) px-5 py-[15px] w-full rounded-md outline-none focus:border-primary transition-all ease-in-out duration-300 shadow-[inset_0px_2px_10px_0px_rgba(165,_39,_255,_0.20)] my-3 bg-background"
                        id="name"
                        {...register("name")}
                        placeholder="Enter Your Name"
                        autoComplete="off"
                    />
                    {errors.name && <p className=" text-red-500 text-[15px] font-semibold tracking-wide !-mt-1 ml-1">
                        {errors.name.message}
                    </p>}

                    <input
                        type="email"
                        className="font-semibold text-[18px] tracking-wide border bg-var(--card) px-5 py-[15px] w-full rounded-md outline-none focus:border-primary transition-all ease-in-out duration-300 shadow-[inset_0px_2px_10px_0px_rgba(165,_39,_255,_0.20)] my-3 bg-background"
                        id="email"
                        {...register("email")}
                        placeholder="Enter Your Email" autoComplete="off"
                    />
                    {errors.email && <p className=" text-red-500 text-[15px] font-semibold tracking-wide !-mt-1 ml-1">
                        {errors.email.message}
                    </p>}

                    <textarea
                        className="font-semibold text-[18px] min-h-[100px] tracking-wide border bg-var(--card) px-5 py-[15px] w-full rounded-md outline-none focus:border-primary transition-all ease-in-out duration-300 shadow-[inset_0px_2px_10px_0px_rgba(165,_39,_255,_0.20)] my-3 resize-none bg-background"
                        id="message"
                        {...register("message")}
                        placeholder="Enter Your Message" autoComplete="off"
                    ></textarea>
                    {errors.message && <p className=" text-red-500 text-[15px] font-semibold tracking-wide !-mt-1 ml-1">
                        {errors.message.message}
                    </p>}
                    <button disabled={isSubmitting} type="submit" className="w-[300px] max-sm:w-full  flex items-center justify-center gap-2 cursor-pointer font-semibold tracking-wider bg-primary text-white mt-5 mb-20 px-5 py-[15px] rounded-md transition-all duration-200 ease-in-out hover:shadow-[0px_0px_10px_5px_rgba(165,_39,_255,_0.20)] disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none">
                        {isSubmitting && <LoaderCircle className="animate-spin" strokeWidth={2.5} size={20} />}
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
