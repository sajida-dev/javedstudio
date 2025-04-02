'use client'
import { useState } from "react";

const TabCard = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            title: "Lassen Peak",
            image: "https://cruip-tutorials.vercel.app/unconventional-tabs/tabs-image-01.jpg",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            id: 2,
            title: "Mount Shasta",
            image: "https://cruip-tutorials.vercel.app/unconventional-tabs/tabs-image-02.jpg",
            description: "Mount Shasta is known for its breathtaking landscapes and is a favorite among hikers and nature lovers.",
        },
        {
            id: 3,
            title: "Eureka Peak",
            image: "https://cruip-tutorials.vercel.app/unconventional-tabs/tabs-image-03.jpg",
            description: "Eureka Peak offers a serene environment, making it an excellent destination for relaxation and adventure.",
        },
    ];

    return (
        <div className="relative font-inter antialiased min-h-screen flex flex-col justify-center bg-white overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                {/* Tabs */}
                <div className="flex justify-center">
                    <div className="inline-flex flex-wrap justify-center bg-slate-200 rounded-[20px] p-1 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`flex-1 text-sm font-medium h-8 min-w-fit px-4 rounded-2xl focus-visible:outline-none transition-colors duration-150 ease-in-out ${activeTab === tab.id ? 'bg-white text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Tab Panels */}
                <div className="max-w-[640px] mx-auto">
                    <div className="relative flex flex-col">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`w-full bg-white rounded-2xl shadow-xl flex items-stretch p-5 transition-opacity duration-500 ease-in-out ${activeTab === tab.id ? 'opacity-100 translate-y-0' : 'opacity-0 hidden'}`}
                            >
                                <figure className="w-1/2 p-2">
                                    <img className="w-full h-[180px] object-cover rounded-lg" src={tab.image} alt={tab.title} />
                                </figure>
                                <div className="w-1/2 flex flex-col justify-center pl-3">
                                    <h1 className="text-xl font-bold text-slate-900">{tab.title}</h1>
                                    <p className="text-slate-500 text-sm mb-2">{tab.description}</p>
                                    <div className="text-right">
                                        <a className="text-sm font-medium text-indigo-500 hover:text-indigo-600 transition-colors duration-150 ease-out" href="#0">Read more →</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabCard;
