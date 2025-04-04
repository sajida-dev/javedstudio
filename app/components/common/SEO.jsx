import Head from "next/head";

const SEO = ({ title }) => {
    return (
        <Head>
            <title>{title ? `${title} | Javed Studio` : "Javed Studio - Professional Photography & Videography"}</title>
            <meta name="description" content="Javed Studio offers professional photography, videography, and editing services for weddings, corporate events, and more." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content="Photography, Videography, Javed Studio, Corporate Shoots, Wedding Photography" />
            <link rel="icon" href="/logo.png" />
        </Head>
    );
};

export default SEO;
