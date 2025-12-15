import { FC } from "react";
import { EducationData } from "../data/Data";

const Education: FC = () => {
    return (
        <div className="w-full max-w-7xl flex justify-center items-start lg:mt-56 md:mt-52 sm:mt-36 mt-32 px-6">
            <div className="w-full flex flex-col justify-start items-start gap-8">
                <div className="w-full flex justify-start items-center">
                    <h1 className="text-4xl text-white font-bold tracking-wider lg:leading-relaxed"
                        style={{ "fontFamily": "cursive" }}>Education</h1>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10 w-full">
                    {
                        EducationData.map((item, index) => (
                            <div key={index} className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] before:bg-zinc-800 last:before:hidden">
                                <div className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border border-zinc-800 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" 
                                        className="text-[#33e092] text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col items-start">
                                    <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                                    <p className="text-white font-medium">{item.degree}</p>
                                    <p className="text-zinc-400 text-sm mt-1">{item.field}</p>
                                    <time
                                        className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">{item.term}</time>
                                    <div className="tracking-tight text-zinc-400 mt-4">
                                        <p>{item.description}</p>
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

export default Education;

