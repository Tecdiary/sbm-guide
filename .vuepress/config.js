module.exports = {
    base: process.env.NODE_ENV === "production" ? "/sbm-guide/" : "/",
    title: "SBM Guide",
    description: "Simple Business Manager - SBM Documentation",
    head: [
        ["link", { rel: "icon", href: `/assets/img/icon.png` }],
        ["link", { href: "https://fonts.googleapis.com/css?family=Montserrat:100,400,400i", rel: "stylesheet", type: "text/css" }],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["meta", { name: "theme-color", content: "#3273dc" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
        ["link", { rel: "apple-touch-icon", href: `/assets/img/icon-152.png` }],
        ["meta", { name: "msapplication-TileImage", content: "/assets/img/icon-144.png" }],
        ["meta", { name: "msapplication-TileColor", content: "#3273dc" }]
    ],
    dest: "docs",
    serviceWorker: true,
    themeConfig: {
        repo: "tecdiary/sbm-guide",
        docsBranch: "master",
        editLinks: true,
        editLinkText: "Help us improve this page!",
        displayAllHeaders: true,
        lastUpdated: "Last Updated",
        nav: [
            { text: "Home", link: "/" },
            { text: "Report Bug", link: "https://trello.com/b/pxHkpEws/sbm-simple-business-manager" },
            { text: "Buy Now", link: "https://tecdiary.com/products/simple-business-manager" }
        ],
        sidebar: [
            {
                title: "General",
                collapsable: true,
                children: ["/"]
            },
            {
                title: "Installation",
                collapsable: true,
                children: ["1.0/install/", "1.0/install/service"]
            },
            {
                title: "Manual",
                collapsable: true,
                children: [
                    "1.0/guide/",
                    "1.0/guide/products-customers-vendors",
                    "1.0/guide/invoices-purchases",
                    "1.0/guide/expenses-incomes",
                    "1.0/guide/accounts-transfers",
                    "1.0/guide/users-settings"
                ]
            },
            {
                title: "FAQs",
                collapsable: true,
                children: ["1.0/faqs/"]
            },
            {
                title: "Credit",
                collapsable: true,
                children: ["1.0/credit/"]
            },
            {
                title: "Developer Guide",
                collapsable: true,
                children: ["1.0/developer-guide/"]
            }
        ],
        serviceWorker: {
            updatePopup: true,
            updatePopup: {
                message: "A new version is available for documentation.",
                buttonText: "Refresh"
            }
        }
    }
};
