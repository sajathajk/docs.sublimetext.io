const config = {
    title: "Unofficial Sublime Text Documentation",
    description: 'Community Driven Sublime Text Documentation',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', { name: 'author', content: 'sublime text community' }],
        ['meta', { name: 'keywords', content: 'sublime text,sublime,documentation' }],
        ['meta', { name: 'theme-color', content: '#ff6600' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    // theme: 'sublime',
    themeConfig: {
        sublime: {
            defaultDarkTheme: false,
            // defaultColorTheme: 'orange',
        },
        repo: 'sublimetext-io/docs.sublimetext.io',
        docsBranch: 'docs',
        editLinks: true,
        sidebarDepth: 3,
        lastUpdated: true,
        nav: [{
                text: 'Home',
                link: '/',
            },
            {
                text: 'Offical Docs',
                link: 'https://www.sublimetext.com/docs/3/',
            },
            {
                text: 'F.A.Q',
                link: '/views/other/question',
            },
        ],
        sidebar: [{
                title: 'Basic', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    '/views/',
                    '/views/installation/',
                    '/views/basic-concepts/'
                ]
            },
            {
                title: 'Editing', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    '/views/editing/'
                ]
            },
            {
                title: 'Search & Replace', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    '/views/search-and-replace/',
                    '/views/search-and-replace/search-and-replace-single',
                    '/views/search-and-replace/search-and-replace-multiple'
                ]
            },
            {
                title: 'Build Systems (Batch Processing)', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    '/views/build-systems/'
                ]
            },
            {
                title: 'File Management & Navigation', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    '/views/file-management/',
                    '/views/file-management/file-management-projects',
                    '/views/file-management/file-management-navigation'
                ]
            },
            {
                title: 'Customization', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    '/views/customization/',
                    '/views/customization/settings',
                    '/views/customization/indentation',
                    '/views/customization/key_bindings',
                    '/views/customization/menus',
                    '/views/customization/color_schemes'
                ]
            },
            {
                title: 'Extensibility & Automation', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    '/views/extensibility/',
                    '/views/extensibility/command_palette',
                    '/views/extensibility/commands',
                    '/views/extensibility/completions',
                    '/views/extensibility/macros',
                    '/views/extensibility/packages',
                    '/views/extensibility/plugins',
                    '/views/extensibility/snippets',
                    '/views/extensibility/syntaxdefs'
                ]
            },
            {
                title: 'Command Line', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    '/views/command-line/'
                ]
            },
            {
                title: 'Reference', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    "/views/reference/",
                    "/views/reference/projects",
                    "/views/reference/syntaxdefs",
                    "/views/reference/color_schemes",
                    '/views/reference/build_systems',
                    "/views/reference/key_bindings",
                    "/views/reference/menus",
                    "/views/reference/settings",
                    "/views/reference/completions",
                    "/views/reference/symbols",
                    "/views/reference/comments",
                    "/views/reference/metadata",
                    "/views/reference/command_palette",
                    "/views/reference/plugins",
                    "/views/reference/api",
                    "/views/reference/commands",
                    "/views/reference/keyboard_shortcuts_osx",
                    "/views/reference/keyboard_shortcuts_win"
                ]
            },
            {
                title: 'Glossary', // required
                path: '/views/', // optional, which should be a absolute path.
                collapsable: false, // optional, defaults to true
                sidebarDepth: 3, // optional, defaults to 1
                children: [
                    '/views/glossary/'
                ]
            }
        ]
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['container', {
            type: 'note',
            defaultTitle: 'Note',
        }],
        ['container', {
            type: 'tip',
            defaultTitle: 'Tip',
        }],
        ['container', {
            type: 'seealso',
            defaultTitle: 'See Also',
        }],
        ['container', {
            type: 'notice',
            defaultTitle: 'Notice',
        }],
        ['container', {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        }],
    ],
};

module.exports = config;