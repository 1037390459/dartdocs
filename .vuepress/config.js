const footbar = require('./footbar')
module.exports = {
    head: [
        ['link', { rel: 'icon', sizes:'64x64', href: '/logo64.png' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'DART编程语言 | DART教程',
            description: 'Dart 中文学习网站.'
        },
    },
    themeConfig: {
        repo: 'ranyunlong/dartdocs',
        docsBranch: 'master',
        editLinks: true,
        logo: '/default-logo.svg',
        sidebarDepth: 2,
        locales: {
            '/': {
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
                lastUpdated: '上次更新',
                nav: [
                    { text: '首页', link: '/' },
                    { text: '指南', link: '/guide/' },
                    { text: 'API', link: 'https://api.dart.ranyunlong.com'}
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: '指南',
                            collapsable: false,
                            children: [
                                '/guide/',
                                '/guide/tools'
                            ]
                        },
                        {
                            title: '学习手册',
                            collapsable: false,
                            children: [
                                '/guide/handbook/',
                                '/guide/handbook/variables',
                                '/guide/handbook/operators',
                                '/guide/handbook/built-in-types'
                            ]
                        }
                    ]
                },
                footbar
            }
        }
    },
    markdown: {
        config: md => {
            md.use(require('markdown-it-mark'))
            md.use(require('markdown-it-include'))
        }
    }
}