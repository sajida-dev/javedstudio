import { NextResponse } from 'next/server';
import { exit } from 'process';

export async function GET({ params }) {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    // const folder = decodeURIComponent(params.folder); // Cloudinary folder name
    const folder = "latest-work";
    console.log('folder', folder); exit;
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    try {
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?prefix=home/${folder}/&max_results=50`,
            {
                headers: {
                    Authorization: `Basic ${auth}`,
                },
            }
        );

        const data = await res.json();

        const images = data.resources.map((img) => img.secure_url);

        return NextResponse.json(images);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
