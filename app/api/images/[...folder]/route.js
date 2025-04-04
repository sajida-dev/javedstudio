// import { NextResponse } from 'next/server';
// import { exit } from 'process';

// export async function GET(request, { params }) {
//     const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
//     const apiKey = process.env.CLOUDINARY_API_KEY;
//     const apiSecret = process.env.CLOUDINARY_API_SECRET;
//     console.log('cloudName', cloudName)

//     const folderSegments = params?.folder
//         ? Array.isArray(params.folder)
//             ? params.folder
//             : [params.folder]
//         : [];
//     console.log('folderSegments', folderSegments)
//     const folderPath = folderSegments.length > 0
//         ? `home/${folderSegments.join("/")}`
//         : "home";  // Default folder if none provided
//     console.log('folderPath', folderPath)
//     const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');
//     const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?prefix=${folderPath}/&max_results=100`;

//     try {
//         const res = await fetch(apiUrl, {
//             headers: {
//                 Authorization: `Basic ${auth}`,
//             },
//             cache: "no-store",
//         });

//         const data = await res.json();
//         console.log('cloudanry data', data)
//         const images = data.resources.map((img) => img.secure_url);

//         return NextResponse.json(images);
//     } catch (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

// app/api/images/[...folder]/route.js

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function GET(request, context) {
    try {
        const folderSegments = context.params?.folder;
        const folderArray = Array.isArray(folderSegments)
            ? folderSegments
            : [folderSegments];

        const folderPath = `home/${folderArray.join("/")}`;
        console.log('folderPath', folderPath)
        const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: folderPath,
            max_results: 100,
        });
        console.log('result', result)
        const imageUrls = result.resources.map((res) => res.secure_url);

        return Response.json(imageUrls);
    } catch (error) {
        console.error('Cloudinary API error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
