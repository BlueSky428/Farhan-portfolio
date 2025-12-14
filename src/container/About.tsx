import { FC } from "react";
import { MyIntroContent, MySkillsCategory, MySkills } from "../data/Data";

const About: FC = () => {
    return (
        <div className="w-full max-w-7xl flex justify-center items-start lg:mt-56 md:mt-52 sm:mt-36 mt-32 px-6 gap-6 lg:flex-row md:flex-row flex-col">
            <div className="lg:w-[60%] md:w-[60%] w-full flex flex-col justify-center items-start text-white lg:gap-14 md:gap-12 sm:gap-10 gap-8">
                <div className="w-full flex flex-col justify-start items-center">
                    <h1 className="text-4xl text-white font-bold tracking-wider lg:leading-snug font-[cursive] mb-8">I'm
                        Farhan Rizal. I live in Indonesia, where I build the future.
                    </h1>
                    {
                        MyIntroContent.map((item, index) => (
                            <p key={index} className="mt-6 mb-6 text-[#b3b3b3]">{item.content}</p>
                        ))
                    }
                    <div
                        className="relative overflow-hidden tracking-tight text-lg my-8 lg:py-6 lg:pl-6 pr-12 p-4 border border-zinc-800 rounded-md">
                        <p className=" text-[#b3b3b3] text-lg">
                            In the face of overwhelming power, Everything is meaningless. This's my slogan word.
                            Overwhelming technology is the pioneer that creates civilization. 💪
                        </p>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                            className="text-7xl absolute -top-7 -right-5 -rotate-12 text-zinc-800" aria-hidden="true"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                    <h1 className="text-4xl text-white font-bold tracking-wider lg:leading-snug font-[cursive] mb-4">
                        My Proficient Skills
                    </h1>
                    <p className="text-[#b3b3b3]">
                        With an eye for detail, I take pride in crafting meticulously designed interfaces,
                        always prioritizing quality over quantity. My journey into emerging ecosystems,
                        particularly in Blockchain and distributed systems, reflects a deep understanding
                        and forward-thinking approach. Driven by autonomy, I thrive in environments that
                        demand independence, ensuring timely delivery without the need for constant oversight.
                    </p>
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                    <h1 className="text-4xl text-white font-bold tracking-wider lg:leading-snug font-[cursive] mb-4">
                        My Goal
                    </h1>
                    <p className="text-[#b3b3b3]">
                        As a front-end developer, I will work to create responsive, efficient, and accessible interfaces
                        that deliver smooth and visually appealing user experiences. My goal is to balance design and
                        functionality to make websites and applications intuitive, performant, and engaging on all devices.
                    </p>
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                    <h1 className="text-4xl text-white font-bold tracking-wider lg:leading-snug font-[cursive] mb-4">
                        Usage
                    </h1>
                    <p className="text-[#b3b3b3]">
                        Tools, technologies and gadgets I use on a daily basis but not limited to.
                    </p>
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                    {
                        MySkillsCategory.map((item, index) => (
                            <div key={index} className="flex flex-col justify-start items-start =">
                                <h1 className="text-4xl text-white font-bold tracking-wider lg:leading-snug font-[cursive] mb-4 mt-6">
                                    {item.title}
                                </h1>
                                <div className="flex flex-col gap-2 justify-start items-start px-4">
                                    {
                                        MySkills.filter(myskills => myskills.parentID === item.id).map((skills, index) => (
                                            <li className="flex mb-4 gap-1 flex-wrap">
                                                <a rel="noopener" target="_blank" className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline">
                                                    <img alt="reactjs" loading="lazy" width="17" height="17" decoding="async" data-nimg="1" className="mr-2" style={{ "color": "transparent" }} src={skills.icon} />{skills.title}
                                                </a>
                                                - {skills.content}
                                            </li>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About;