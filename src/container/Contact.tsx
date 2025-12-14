import { FC } from "react";
import SocialLinks from "../components/elements/SocialLinkds";

const Contact: FC = () => {
    return (
        <div className="w-full max-w-7xl flex justify-center items-start lg:mt-60 md:mt-36 sm:mt-32 mt-28 px-6 lg:flex-row md:flex-row flex-col">
            <div className="w-full flex flex-col justify-start items-start">
                <h1 className="text-4xl text-white font-bold tracking-wider lg:leading-snug font-[cursive] mb-8">
                    Get In Touch
                </h1>
                <div className="md:w-1/2 w-full flex justify-start items-center">
                    <p className="text-start text-lg text-[#8c8b8b]">I am constantly working to make my dreams come true and my mailbox is always open. I am always here to help you with anything you need, anytime. Just contact me.</p>
                </div>
                <SocialLinks />
            </div>
        </div>
    )
}

export default Contact;