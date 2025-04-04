// // tailwind.config.js
// module.exports = {
//     content: [
//         "./app/**/*.{js,ts,jsx,tsx}",
//         "./pages/**/*.{js,ts,jsx,tsx}",
//         "./components/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//         extend: {
//             keyframes: {
//                 "scale-in-ver-center": {
//                     "0%": { transform: "scaleY(0)", opacity: "1" },
//                     "100%": { transform: "scaleY(1)", opacity: "1" },
//                 },
//                 "scale-in-hor-center": {
//                     "0%": { transform: "scaleX(0)", opacity: "1" },
//                     "100%": { transform: "scaleX(1)", opacity: "1" },
//                 },
//                 "slide-in-top": {
//                     "0%": { transform: "translateY(-100rem)", opacity: "0" },
//                     "100%": { transform: "translateY(0)", opacity: "1" },
//                 },
//                 "slide-in-left": {
//                     "0%": { transform: "translateX(-1000px)", opacity: "0" },
//                     "100%": { transform: "translateX(0)", opacity: "1" },
//                 },
//                 "slide-in-right": {
//                     "0%": { transform: "translateX(1000px)", opacity: "0" },
//                     "100%": { transform: "translateX(0)", opacity: "1" },
//                 },
//             },
//             animation: {
//                 "scale-in-ver-center": "scale-in-ver-center 0.5s ease-out forwards",
//                 "scale-in-hor-center": "scale-in-hor-center 0.5s ease-out forwards",
//                 "slide-in-top": "slide-in-top 0.5s ease-out forwards",
//                 "slide-in-left": "slide-in-left 0.5s ease-out forwards",
//                 "slide-in-right": "slide-in-right 0.5s ease-out forwards",
//             },
//         },
//     },
//     plugins: [],
// };


module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './public/img/team/**/*.{jpg,jpeg,png,svg}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}