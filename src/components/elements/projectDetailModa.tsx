import { FC, useEffect, useState } from "react";
import { MyProjectDetails } from "../../data/Data";

type ProjectDetailModalProps = {
    isOpen?: boolean
    setIsOpen?: any,
    id?: number
}

const ProjectDetailModal: FC<ProjectDetailModalProps> = ({ isOpen, setIsOpen, id }) => {

    const [ID, setID] = useState<number>(0);

    useEffect(() => {
        if (id !== undefined) setID(id)
    }, [id])

    return (
        <div className={`w-full h-screen fixed top-0 z-50 bg-none ${isOpen ? "flex" : "hidden"}`}>
            <div className="transition duration-500 md:max-w-3xl md:w-full m-3 md:mx-auto lg:mt-12 animate__animated animate__fadeInDown">
                <div className="flex flex-col rounded-2xl py-4 px-5 border-4 border-[#27272a] bg-[#18181b]" style={{ backgroundImage: "url('/images/background-image.png')", }}>
                    <div className="flex justify-between items-center pb-4">
                        <h4 className="text-sm font-medium text-white">{MyProjectDetails[ID].title}</h4>
                        <button className="block cursor-pointer close-modal-button" data-pd-overlay="#medium-modal" data-modal-target="medium-modal" onClick={() => setIsOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.75732 7.75739L16.2426 16.2427M16.2426 7.75739L7.75732 16.2427" stroke="white" strokeWidth="1.6" strokeLinecap="round"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="overflow-y-auto py-4 flex flex-col justify-center items-center">
                        <div className='w-full flex justify-center items-end'>
                            <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full flex flex-col justify-start items-start mb-8'>
                                <p className="font-medium lg:text-2xl md:text-2xl sm:text-lg text-lg text-white">Project Title : {MyProjectDetails[ID].title}</p>
                                <p className="font-medium lg:text-lg text-sm text-white">Project Role : {MyProjectDetails[ID].role}</p>
                            </div>
                            <div className='w-1/2 justify-center items-center lg:flex md:flex sm:hidden hidden'>
                                <img src={MyProjectDetails[ID].image} alt="" className='w-64 h-40 rounded-lg' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-start py-2 overflow-y-auto lg:h-auto md:h-auto sm:h-60 h-40 gap-4'>
                            <p className="font-medium text-white text-xl">Overview</p>
                            <p className="font-medium text-white">{MyProjectDetails[ID].overview}</p>
                        </div>
                        <div className='w-full flex flex-col justify-center items-start py-2 overflow-y-auto lg:h-auto md:h-auto sm:h-60 h-40 gap-4'>
                            <p className="font-medium text-white text-xl">Technical Details</p>
                            <div className="flex flex-col justify-center items-start gap-1">
                                <ul className="list-[square] ml-5">
                                    {
                                        MyProjectDetails[ID].Skill.map((tech, index) => (
                                            <li key={index} className="mb-4 text-[#858585]"><code className="py-[0.15rem] px-1 font-bold text-white">{tech.skill}</code> : {tech.content}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end pt-4 border-t border-[#27272a] space-x-4">
                        <button type="button" className="py-2.5 px-5 text-xs bg-indigo-50 text-[#33e092] rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100 close-modal-button" data-pd-overlay="#medium-modal" data-modal-target="medium-modal" onClick={() => setIsOpen(false)}>Cancel</button>
                        <a href={MyProjectDetails[ID].liveURL} target={MyProjectDetails[ID].liveURL} className="py-2.5 px-5 text-xs  bg-[#33e092] text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-opacity-85 close-modal-button" data-pd-overlay="#medium-modal" data-modal-target="medium-modal">Visit Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailModal;