import { FC, useState } from "react";

const GithubRepository: FC = () => {

    const [selectedYear, setSelectedYear] = useState(2024);
    const [commit, setCommit] = useState<number>(195);

    const See_Contribution = (year: number) => {
        setSelectedYear(year);
        if (year === 2024) setCommit(195);
        else if (year === 2023) setCommit(906);
        else if (year === 2022) setCommit(381);
        else if (year === 2021) setCommit(483);
        else if (year === 2020) setCommit(224)
    }

    return (
        <div className="w-full flex flex-col justify-start items-start px-6 mt-16 gap-4">
            <div className="w-full flex justify-start items-center">
                <h1
                    className="text-4xl text-white font-bold tracking-wider lg:leading-relaxed"
                    style={{ fontFamily: "'Lobster', cursive" }}
                >
                    Contribution Graph
                </h1>
            </div>

            <div className="w-full grid lg:grid-cols-[85%_15%] md:grid-cols-[85%_15%] sm:grid-cols-1 grid-cols-1 gap-2">
                <div
                    id="parentDiv"
                    className="w-full h-56 flex flex-col justify-center items-start gap-2 p-2 border border-[#27272a] rounded-lg bg-[#0d1117]"
                >
                    <img
                        src={`/images/github/${selectedYear}.png`}
                        alt={`Contribution graph for ${selectedYear}`}
                        className="w-full object-contain"
                    />

                    <div className="w-full flex justify-between items-start lg:flex-row md:flex-row sm:flex-row flex-col">
                        <p id="contribution" className="text-white">
                            {commit} contributions in {selectedYear}
                        </p>
                        <div className="flex justify-center items-center">
                            <span style={{ marginRight: '0.4em' }} className="text-white">
                                Less
                            </span>
                            <svg width="13" height="13">
                                <rect width="13" height="13" fill="#161b22" rx="2" ry="2" />
                            </svg>
                            <svg width="13" height="13">
                                <rect width="13" height="13" fill="#0e4429" rx="2" ry="2" />
                            </svg>
                            <svg width="13" height="13">
                                <rect width="13" height="13" fill="#006d32" rx="2" ry="2" />
                            </svg>
                            <svg width="13" height="13">
                                <rect width="13" height="13" fill="#26a641" rx="2" ry="2" />
                            </svg>
                            <svg width="13" height="13">
                                <rect width="13" height="13" fill="#39d353" rx="2" ry="2" />
                            </svg>
                            <span style={{ marginLeft: '0.4em' }} className="text-white">
                                More
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    className="flex lg:flex-col md:flex-col sm:flex-row sm:flex-wrap flex-wrap flex-row justify-start items-center gap-2"
                    id="parent"
                >
                    {[2024, 2023, 2022, 2021, 2020].map((year) => (
                        <button
                            key={year}
                            className={`bg-[#18181b] lg:px-8 lg:py-3 md:px-8 md:py-2 sm:px-6 sm:py-2 px-5 py-1 text-[#33e092] rounded-lg btn ${selectedYear === year ? 'active' : ''
                                }`}
                            onClick={() => See_Contribution(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GithubRepository;