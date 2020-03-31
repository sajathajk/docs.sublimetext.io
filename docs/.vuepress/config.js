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
        docsDir: 'docs',
        editLinks: true,
        sidebarDepth: 3,
        lastUpdated: true,
        nav: [
            {
                title: 'Guide',
                link: '/guide/',
            },
            {
                title: 'Reference',
                link: '/reference/',
            },
            {
                title: 'Glossary',
                link: '/glossary',
            },
            {
                text: 'F.A.Q',
                link: '/other/question',
            },
            {
                text: 'Offical Docs',
                link: 'https://www.sublimetext.com/docs/3/',
            },
        ],
        sidebar: {
            // '/': {
            //     title: 'Introduction',
            //     path: '/',
            //     collapsable: false,
            //     sidebarDepth: 3,
            //     children: [
            //         '',
            //     ],
            // },
            '/guide/': [
                {
                    title: 'Introduction',
                    path: '',
                },
                {
                    title: 'Installation',
                    path: 'installation',
                },
                {
                    title: 'Basic Concepts',
                    path: 'basic-concepts/',
                },
                {
                    title: 'Editing',
                    path: 'editing/',
                    sidebarDepth: 3,
                    children: [
                    ],
                },
                {
                    title: 'Search & Replace',
                    // The theme has a problem if I use a relative path to `/guide/` here.
                    path: '/guide/search-and-replace/',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        'search-and-replace/search-and-replace-single',
                        'search-and-replace/search-and-replace-multiple'
                    ],
                },
                {
                    title: 'Build Systems (Batch Processing)',
                    path: 'build-systems/',
                    sidebarDepth: 3,
                    children: [
                    ],
                },
                {
                    title: 'File Management & Navigation',
                    // path: '/guide/file-management',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        'file-management/file-management-projects',
                        'file-management/file-management-navigation'
                    ],
                },
                {
                    title: 'Customization',
                    path: '/guide/customization',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        'customization/settings',
                        'customization/indentation',
                        'customization/key_bindings',
                        'customization/menus',
                        'customization/color_schemes'
                    ],
                },
                {
                    title: 'Extensibility & Automation',
                    path: '/guide/extensibility',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        'extensibility/command_palette',
                        'extensibility/commands',
                        'extensibility/completions',
                        'extensibility/macros',
                        'extensibility/packages',
                        'extensibility/plugins',
                        'extensibility/snippets',
                        'extensibility/syntaxdefs'
                    ],
                },
                // {
                //     title: 'Command Line',
                //     path: '/command-line/',
                // },
            ],
            '/reference/': [
                {
                    title: 'Reference',
                    path: '/reference/',
                    collapsable: false,
                    sidebarDepth: 1,
                    // TODO maybe flatten
                    children: [
                        'projects',
                        'syntaxdefs',
                        'color_schemes',
                        'build_systems',
                        'key_bindings',
                        'menus',
                        'settings',
                        'completions',
                        'symbols',
                        'comments',
                        'metadata',
                        'command_palette',
                        'plugins',
                        'api',
                        'commands',
                        'keyboard_shortcuts_osx',
                        'keyboard_shortcuts_win'
                    ],
                },
            ],
        },
    },
    markdown: {
        lineNumbers: true,
        plugins: [
            'deflist',
            'footnote',
            // TODO check if these are the default already
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
    },
    // TODO add plugins, e.g. md-check
};

module.exports = config;
