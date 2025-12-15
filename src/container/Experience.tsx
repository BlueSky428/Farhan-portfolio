import { FC } from "react";
import { WorkExperienceContent, WorkExperienceData } from "../data/Data";

const Experience: FC = () => {
    return (
        <div className="w-full max-w-7xl flex justify-center items-start lg:mt-56 md:mt-52 sm:mt-36 mt-32 px-6">
            <div className="w-full flex flex-col justify-start items-start gap-8">
                <div className="w-full flex justify-start items-center">
                    <h1 className="text-4xl text-white font-bold tracking-wider lg:leading-relaxed"
                        style={{ "fontFamily": "cursive" }}>Work Experience</h1>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10 w-full">
                    {
                        WorkExperienceData.map((item, index) => (
                            <div key={index} className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] before:bg-zinc-800">
                                <a rel="noopener"
                                    className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border border-zinc-800 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
                                    href="#">
                                    <img alt={item.company} loading="lazy" width="50" height="50" decoding="async" data-nimg="1"
                                        className="object-cover duration-300 bg-transparent"
                                        src={item.img} />
                                </a>
                                <div className="flex flex-col items-start">
                                    <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                                    <p className="text-white">{item.role}</p>
                                    <time
                                        className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">{item.term}</time>
                                    <div className="tracking-tight text-zinc-400">
                                        <ul className="list-[square] mt-5 ml-5">
                                            {
                                                WorkExperienceContent.filter((Content => Content.parentID === item.id)).map((ContentData, idx) => (
                                                    <li key={idx} className="mb-2">{ContentData.content}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience;

