module.exports = {
    head: [
        ['link', { rel: 'icon', sizes:'64x64', href: '/logo64.png' }]
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Dart programming language | Dart tutorial',
            description: 'Dart is a language optimized for client-side development for web and mobile.'
        },
        "/zh/": {
            lang: 'zh-CN',
            title: 'DART编程语言 | Dart中文教程',
            description: 'DART 中文教程学习网站'
        }
    },
    themeConfig: {
        repo: 'ranyunlong/dartdocs',
        docsBranch: 'master',
        editLinks: true,
        logo: 'https://www.dartlang.org/assets/shared/dart/logo+text/horizontal/default-363c9c133ffb7780463d3d638632b64cc8221d74d93cd1002fb1efbbe9983bc9.svg',
        sidebarDepth: 1,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                      message: "New content is available.",
                      buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/guide/' },
                    { text: 'API', link: '/api/'}
                ],
                // lastUpdated: 'Last Updated',
                sidebar: {
                    '/guide/': [
                        {
                            title: 'GUIDE',
                            collapsable: false,
                            children: [
                                ['/guide/','Guide'],
                                '/guide/install',
                                '/guide/tools'
                            ]
                        }
                    ],
                    '/api/': [
                        {
                            title: 'CORE',
                            collapsable: false,
                            children: [
                                ['/api/core/async/','async'],
                                ['/api/core/collection/', 'collection'],
                                ['/api/core/convert/', 'convert'],
                                ['/api/core/core/', 'core'],
                                ['/api/core/developer/', 'developer'],
                                ['/api/core/math/', 'math'],
                                ['/api/core/typed_data/', 'typed_data'],
                            ]
                        },
                        {
                            title: 'WEB',
                            collapsable: false,
                            path: '/api/web/',
                            children: [
                                ['/api/web/html/','html'],
                                ['/api/web/indexed_db/', 'indexed_db'],
                                ['/api/web/js/', 'js'],
                                ['/api/web/js_util/', 'js_util'],
                                ['/api/web/svg/', 'svg'],
                                ['/api/web/web_audio/', 'web_audio'],
                                ['/api/web/web_gl/', 'web_gl'],
                                ['/api/web/web_sql/', 'web_sql']
                            ]
                        },
                        {
                            title: 'VM',
                            path: '/api/vm/',
                            collapsable: false,
                            children: [
                                ['/api/vm/cli/','cli'],
                                ['/api/vm/io/', 'io'],
                                ['/api/vm/isolate/', 'isolate'],
                                ['/api/vm/mirrors/', 'mirrors']
                            ]
                        }
                    ]
                },
                footbar: [
                    {
                        label: 'TECHNOLOGIES',
                        children: [
                            {
                                label: 'Mobile (Flutter)',
                                link: ''
                            },
                            {
                                label: 'Dart for the web'
                            },
                            {
                                label: 'Server-side Dart'
                            },
                            {
                                label: 'Observatory'
                            },
                            {
                                label: 'Dart libraries'
                            },
                            {
                                label: 'Dart programming language'
                            }
                        ]
                    },
                    {
                        label: 'RESOURCES',
                        children: [
                            {
                                label: 'API reference'
                            },
                            {
                                label: 'DartPad'
                            },
                            {
                                label: 'Pub packages'
                            },
                            {
                                label: 'Dart news'
                            },
                            {
                                label: 'Dart bugs and feature requests'
                            }
                        ]
                    },
                    {
                        label: 'COMMUNITY',
                        children: [
                            {
                                label: 'Support & mailing lists'
                            },
                            {
                                label: 'Who uses Dart'
                            },
                            {
                                label: 'Stack Overflow'
                            },
                            {
                                label: 'G+ community & announcement group'
                            },
                            {
                                label: 'Gitter chat rooms'
                            },
                        ]
                    }
                ]
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                      message: "发现新内容可用.",
                      buttonText: "刷新"
                    }
                },
                algolia: {},
                // lastUpdated: '上次更新',
                nav: [
                    { text: '首页', link: '/zh/' },
                    { text: '指南', link: '/zh/guide/' },
                    { text: 'API', link: '/zh/api/'}
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            title: '学习指南',
                            collapsable: false,
                            children: [
                                ['/zh/guide/','指南'],
                                ['/zh/guide/install','安装SDK'],
                                ['/zh/guide/tools','开发工具']
                            ]
                        }
                    ],
                    '/zh/api/': [
                        {
                            title: 'CORE',
                            collapsable: false,
                            children: [
                                ['/zh/api/core/async/','async'],
                                ['/zh/api/core/collection/', 'collection'],
                                ['/zh/api/core/convert/', 'convert'],
                                ['/zh/api/core/core/', 'core'],
                                ['/zh/api/core/developer/', 'developer'],
                                ['/zh/api/core/math/', 'math'],
                                ['/zh/api/core/typed_data/', 'typed_data'],
                            ]
                        },
                        {
                            title: 'WEB',
                            collapsable: false,
                            children: [
                                ['/zh/api/web/html/','html'],
                                ['/zh/api/web/indexed_db/', 'indexed_db'],
                                ['/zh/api/web/js/', 'js'],
                                ['/zh/api/web/js_util/', 'js_util'],
                                ['/zh/api/web/svg/', 'svg'],
                                ['/zh/api/web/web_audio/', 'web_audio'],
                                ['/zh/api/web/web_gl/', 'web_gl'],
                                ['/zh/api/web/web_sql/', 'web_sql']
                            ]
                        },
                        {
                            title: 'VM',
                            path: '/api/vm/',
                            collapsable: false,
                            children: [
                                ['/zh/api/vm/cli/','cli'],
                                ['/zh/api/vm/io/', 'io'],
                                ['/zh/api/vm/isolate/', 'isolate'],
                                ['/zh/api/vm/mirrors/', 'mirrors']
                            ]
                        }
                    ]
                },
                footbar: [
                    {
                        label: '技术',
                        children: [
                            {
                                label: 'Dart 移动开发 (Flutter)',
                                link: ''
                            },
                            {
                                label: 'Dart web 开发'
                            },
                            {
                                label: 'Dart 服务器开发'
                            },
                            {
                                label: 'Observatory 工具'
                            },
                            {
                                label: 'Dart 库'
                            },
                            {
                                label: 'Dart 编程语言'
                            }
                        ]
                    },
                    {
                        label: '资源',
                        children: [
                            {
                                label: 'API 参考'
                            },
                            {
                                label: 'DartPad'
                            },
                            {
                                label: 'Pub packages'
                            },
                            {
                                label: 'Dart 新闻'
                            },
                            {
                                label: 'Dart bugs 和新需求'
                            }
                        ]
                    },
                    {
                        label: '社区',
                        children: [
                            {
                                label: '支持和邮件列表'
                            },
                            {
                                label: '谁在用Dart'
                            },
                            {
                                label: 'Stack Overflow'
                            },
                            {
                                label: 'G+ 社区 & 公告组'
                            },
                            {
                                label: 'Gitter聊天室'
                            },
                        ]
                    }
                ]
            }
        }
    },
    markdown: {
        config: md => {
            md.use(require('markdown-it-mark'))
            md.use(require('markdown-it-include'))
        }
    },
    plugins: ['@vuepress/back-to-top'] 
}