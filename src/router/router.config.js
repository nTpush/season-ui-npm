export default [
    {
        path: '/test',
        name: 'test',
        component: r => require.ensure([], () => r(require('../docs/test.md')))
    }, {
        path: '/button',
        name: 'button',
        component: r => require.ensure([], () => r(require('../docs/button.md')))
    },
    {
        path: '/layout',
        name: 'layout',
        component: r => require.ensure([], () => r(require('../docs/grild.md')))
    }
]