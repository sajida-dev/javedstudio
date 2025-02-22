import { motion, useSpring, useTransform } from "framer-motion";

export default function FeatureCard({ feature, className, zIndexOffset = 0, ...props }) {
    const { title, category, imageUrl } = feature;
    const springValue = useSpring(0, { bounce: 0 });
    const zIndex = useTransform(springValue, (value) => Math.floor(value * 10) + 10 + zIndexOffset);
    const scale = useTransform(springValue, [0, 1], [1, 1.1]);

    const content = (
        <>
            <img src={imageUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="z-10 flex h-full w-full flex-col gap-2 bg-gradient-to-t from-zinc-800/40 from-15% to-transparent p-3">
                <small className="inline w-fit rounded-xl bg-orange-950 bg-opacity-50 px-2 py-1 text-xs font-medium leading-none text-white">
                    {category}
                </small>
                <div className="flex-1" />
                <h3 className="rounded-xl bg-blue-950 bg-opacity-30 p-3 text-base font-bold leading-none text-white backdrop-blur-sm">
                    {title}
                </h3>
            </div>
        </>
    );
    return (
        <>
            <motion.div
                onMouseEnter={() => springValue.set(1)}
                onMouseLeave={() => springValue.set(0)}
                style={{ zIndex, scale }}
                className={`relative flex h-64 w-48 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl hidden sm:flex ${className}`}
                {...props}
            >
                {content}
            </motion.div>
            <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0, transition: { duration: 0.5 } }}
                className={`relative flex h-64 w-48 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl flex sm:hidden ${className}`}
            >
                {content}
            </motion.div>
        </>
    );
}