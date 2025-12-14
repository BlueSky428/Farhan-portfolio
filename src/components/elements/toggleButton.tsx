import { FC } from "react";

type ToogleButtonProps = {
    setIsMobileHeader?: any,
    isMobileHeader?: boolean
}

const ToggleButton: FC<ToogleButtonProps> = ({ setIsMobileHeader, isMobileHeader }) => {

    return (
        <div onClick={() => setIsMobileHeader(!isMobileHeader)} className="menu-icon rounded-full p-2 w-10 h-10 border border-gray-400 flex flex-col justify-center items-center gap-1 cursor-pointer transition-all">
            <span className="line top w-4 h-[0.2rem] bg-[#33e092] rounded-full transition-all"></span>
            <span className="line middle w-6 h-[0.2rem] bg-[#33e092] rounded-full transition-all"></span>
            <span className="line bottom w-4 h-[0.2rem] bg-[#33e092] rounded-full transition-all"></span>
        </div>
    )
}

export default ToggleButton;