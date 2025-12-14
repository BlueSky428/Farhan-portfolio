import { FC, useState } from "react";
import { MyProjects } from "../data/Data";
import ProjectDetailModal from "../components/elements/projectDetailModa";

const Projects: FC = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [projectID, setProjectID] = useState<number>(0);

    const OpenProjectDetailModal = (id: number) => {
        setProjectID(id);
        setIsOpenModal(true)
    }

    return (
        <>
            <div className="w-full max-w-7xl flex justify-center items-start lg:mt-40 md:mt-36 sm:mt-32 mt-28 px-6 gap-6 lg:flex-row md:flex-row flex-col">
                <div className="w-full flex flex-col justify-start">
                    <h1 className="text-4xl text-white font-bold tracking-wider lg:leading-snug font-[cursive] mb-8">
                        Projects
                    </h1>
                    <div className="lg:w-[50%] md:w-[50%] w-full">
                        <p className="mb-6 text-[#b3b3b3]">
                            I've worked on tons of little projects over the years but these are the ones
                            that I'm most proud of. Many of them are Blockchain related projects, so if you see something that
                            piques your interest, check out the code and contact, if you have ideas.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-4">
                        {
                            MyProjects.map((item, index) => (
                                <div key={index} onClick={() => OpenProjectDetailModal(index)} className="flex flex-row justify-start items-center gap-4 bg-[#19191e] py-5 px-4 cursor-pointer rounded-lg hover:border-[#27272a] border border-[#19191e]">
                                    <div className="p-2 bg-[#27272a] rounded-lg">
                                        <img src={item.icon} alt="" className="rounded-lg w-14" />
                                    </div>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className="text-lg text-white font-medium">{item.title}</p>
                                        <p className="text-sm text-[#676768] font-medium">{item.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ProjectDetailModal setIsOpen={setIsOpenModal} isOpen={isOpenModal} id={projectID} />
        </>
    )
}

export default Projects;