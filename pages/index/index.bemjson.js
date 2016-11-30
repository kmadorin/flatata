module.exports = {
    block: 'page',
    title: 'Flatstudio',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:300,300i,400'},
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'hero',
            content: [
                {
                    block: 'page-header',
                    content: {
                        elem: 'in',
                        content: [
                            {
                                elem: 'logo',
                                url: 'index.html',
                                content: {
                                    block: 'logo',
                                }
                            },
                            {
                                block: 'page-nav',
                                content: [
                                    {
                                        block: 'page-menu',
                                        content: [
                                        {
                                            elem: 'item',
                                            content: {
                                                elem: 'link',
                                                content: 'Our work',
                                                url: '#'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                elem: 'link',
                                                content: 'Our story',
                                                url: '#'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                elem: 'link',
                                                content: 'Our services',
                                                url: '#'
                                            }
                                        }
                                        ]
                                    },
                                    {
                                        block: 'link',
                                        mix: [{block: 'page-nav', elem: 'message'}, 'button'],
                                        mod: 'btn',
                                        content: 'Message us',
                                        url: '#'
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    elem: 'content',
                    content: [
                        {
                            elem: 'col',
                            elemMods: {left : true},
                            content: {
                                block: 'heading',
                                mods: { size : 'xl'},
                                content: [
                                    'We develop complex Interface systems for Web, Apps and VR',
                                    {
                                        elem: 'dot',
                                        content: '.'
                                    }
                                ]
                            }
                        },
                        {
                            elem: 'col',
                            elemMods: {right : true},
                            content: {
                                block: 'paragraph',
                                content: 'Flatstudio is a team with full range of services. We have made projects for Google, Microsoft, Tesla, Rambler, Novo Banco, Continente, Uplabs and Cleverdo. Our principal rule is to keep things simple, intuitive and adaptive for all world people.'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'demo',
            content: {
                elem: 'in',
                content: [
                    {
                        elem: 'awwwards',
                        content: ''
                    },
                    {
                        block: 'logo',
                        mods: {nyt: true},
                        mix: {block: 'demo', elem: 'logo'},
                        content: "New Yourk Times"
                    },
                    {
                        elem: 'about',
                        tag: 'h2',
                        content: 'A news site that<br>inspires you'
                    },
                    {
                        block: 'link',
                        mix: [{ block: 'demo', elem: 'more'}, {block: 'button', mods: {grey: true}}],
                        url: 'http://www.nytimes.com/',
                        content: 'Learn more'
                    }
                ]
            }
        },
        {
            block: 'start',
            content: 'Start'
        }
    ]
};
