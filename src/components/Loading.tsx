import { FC } from "react";

const Loading: FC = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#18181b]">
            <div className="loader">
                <div className="intern">
                </div>
                <div className="external-shadow">
                    <div className="central">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;