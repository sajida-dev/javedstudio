export const menu = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
        label: "Services",
        href: "/services",
        submenu: [
            { label: "Baby Photography", href: "/service/baby" },
            { label: "Product Photography", href: "/service/product" },
            { label: "Couple Photography", href: "/service/couple" },
            { label: "Wedding Photography", href: "/service/weddings" },
            { label: "Corporate Photography", href: "/service/corporate" },
        ]
    },
    { label: "Contact Us", href: "/contact" }
];