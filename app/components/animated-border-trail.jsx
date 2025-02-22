import React from "react";

const sizes = {
    sm: 5,
    md: 10,
    lg: 20,
};



export default function AnimatedBorderTrail({
    children,
    className = "",
    duration = "10s",
    trailColor = "purple",
    trailSize = "md",
    contentClassName = "",
    ...props
}) {
    return (
        <div
            {...props}
            className={`relative h-fit w-fit overflow-hidden rounded-2xl bg-gray-200 p-px ${className}`}
        >
            <div
                className="absolute inset-0 h-full w-full animate-trail"
                style={{
                    "--duration": duration,
                    "--angle": "0deg",
                    background: `conic-gradient(from var(--angle) at 50% 50%, transparent ${100 - sizes[trailSize]}%, ${trailColor})`,
                }}
            />
            <div
                className={`relative h-full w-full overflow-hidden rounded-[15px] bg-white ${contentClassName}`}
            >
                {children}
            </div>
        </div>
    );
}
