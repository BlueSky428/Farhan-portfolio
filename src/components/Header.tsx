import { FC, useState } from "react";
import { HeaderCategoryData } from "../data/Data";
import HeaderCategory from "./elements/headerCategory";
import ToggleButton from "./elements/toggleButton";

const Header: FC = () => {

    const [isMobileHeader, setIsMobileHeader] = useState<boolean>(false);

    return (
        <div
            className="w-full h-24 border-b border-b-[#27272a] flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center absolute top-0">
            <div className="w-full max-w-7xl h-full flex justify-center items-center relative">
                <a href="/" className="left-0 absolute">
                    <img src="/images/user.jpg" alt="No avatar"
                        className="w-14 h-14 rounded-lg ml-6 cursor-pointer" />
                </a>
                <div className="justify-center items-center gap-10 lg:flex md:flex sm:hidden hidden mr-6">
                    {
                        HeaderCategoryData.map((item, index) => (
                            <HeaderCategory key={index} category={item.title} />
                        ))
                    }
                </div>
                <div className="lg:hidden md:hidden sm:flex flex mr-6">
                    <ToggleButton setIsMobileHeader={setIsMobileHeader} isMobileHeader={isMobileHeader} />
                </div>
                {
                    isMobileHeader && <div className="w-full absolute top-24 flex-col justify-start items-center lg:hidden md:hidden flex bg-[#18181b]"
                        style={{ backgroundImage: "url('/images/background-image.png')", }}>
                        {
                            HeaderCategoryData.map((item, index) => (
                                <div key={index} className="w-full py-4 flex justify-start items-center px-6 border-t border-t-[#27272a] text-white">
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Header;