export const menu = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
        label: "Services",
        href: "/services",
        submenu: [
            { label: "Wedding Photography", href: "/service/weddings" },
            { label: "Couple Photography", href: "/service/couple" },
            { label: "Corporate Photography", href: "/service/corporate" },
            { label: "Product Photography", href: "/service/product" },
            { label: "Baby Photography", href: "/service/baby" },
        ]
    },
    { label: "Contact Us", href: "/contact" }
];