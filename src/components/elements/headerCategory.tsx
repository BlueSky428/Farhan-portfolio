import { FC } from "react";

type CategoryProps = {
    category?: string
}

const HeaderCategory: FC<CategoryProps> = ({ category }) => {

    return (
        <p className="text-lg group relative">
            <a href={"/" + category?.toLowerCase()} className="text-white group-hover:text-[#33e092] duration-300 transition">{category}</a>
            <span
                className="absolute -bottom-1 left-0 w-0 transition-all h-[0.2rem] bg-[#33e092] group-hover:w-full"></span>
        </p>
    )
}

export default HeaderCategory;