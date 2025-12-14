import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="w-full border-t border-zinc-800 mt-44 lg:h-[250px] h-[50px] relative">
            <div
                className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center justify-center gap-y-4 md:px-16 px-6 py-16">
                <div className="flex flex-col lg:items-end items-center lg:text-start text-center"><small
                    className="text-zinc-500">Copyright © Benjamin 2024 All rights Reserved</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer;