import React from "react";

const SocialLinks = () => {
  return (
    <div style={{ opacity: 1, transform: "none", willChange: "auto" }}>
      <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center text-white group"
            href="https://github.com/Bluesky428"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="flex-shrink-0 h-5 w-5 text-white duration-300"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              />
            </svg>
            &nbsp;GitHub
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center border-zinc-200 group text-white"
            href="mailto:farhanrizal1104@gmail.com"
          >
            <svg
              fill="#FFFFFF"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="flex-shrink-0 h-5 w-5 text-white duration-300"
              viewBox="0 0 75.294 75.294"
              xmlSpace="preserve"
            >
              <g>
                <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z" />
              </g>
            </svg>
            &nbsp;Email
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center group text-white"
            href="https://t.me/farhanrizal00"
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 455 455"
              xmlSpace="preserve"
              className="flex-shrink-0 h-5 w-5 duration-300"
            >
              <g>
                <path
                  style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                  d="M0,0v455h455V0H0z M384.814,100.68l-53.458,257.136
                    c-1.259,6.071-8.378,8.822-13.401,5.172l-72.975-52.981c-4.43-3.217-10.471-3.046-14.772,0.403l-40.942,31.867
                    c-4.725,3.676-11.554,1.371-12.894-4.565L151.201,254.29L53.3,224.035c-6.104-1.745-6.239-10.554-0.197-12.43l272.081-88.919
                    C330.021,120.662,386.313,92.854,384.814,100.68z"
                />
              </g>
            </svg>
            &nbsp;Telegram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;