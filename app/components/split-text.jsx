'use client'
import { useRef, useState } from "react";

export default function SplitText({ text, className }) {
    const [activeIndex, setIndex] = useState();
    const timer = useRef(null);

    const letterClassName =
        "inline h-1/2 select-none overflow-y-hidden leading-none transition-all duration-300 ease-out whitespace-pre";

    return (
        <div
            className={`flex justify-center mt-5 mb-5 relative mx-auto cursor-sword text-2xl  font-black uppercase text-orange-500 md:text-3xl lg:text-8xl ${className || ""}`}
        >
            <div className="invisible leading-none">{text}</div>
            <div className="absolute top-0 flex h-full">
                {text.split("").map((letter, index) => (
                    <div
                        onMouseEnter={() => {
                            if (timer.current) {
                                clearTimeout(timer.current);
                            }
                            setIndex(index);
                        }}
                        onMouseLeave={() => {
                            timer.current = setTimeout(() => {
                                setIndex(undefined);
                            });
                        }}
                        key={index}
                        className="relative inline-flex h-full cursor-sword flex-col leading-none"
                    >
                        {/** top half */}
                        <span
                            className={`${letterClassName} ${index === activeIndex
                                ? "-translate-y-5"
                                : index === activeIndex - 1 || index === activeIndex + 1
                                    ? "-translate-y-3"
                                    : index === activeIndex - 2 || index === activeIndex + 2
                                        ? "-translate-y-1"
                                        : ""
                                }`}
                        >
                            {letter}
                        </span>

                        {/** bottom half */}
                        <span
                            className={`${letterClassName} ${index === activeIndex
                                ? "translate-y-5"
                                : index === activeIndex - 1 || index === activeIndex + 1
                                    ? "translate-y-3"
                                    : index === activeIndex - 2 || index === activeIndex + 2
                                        ? "translate-y-1"
                                        : ""
                                }`}
                        >
                            <span className="absolute -translate-y-1/2 leading-none">
                                {letter}
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
