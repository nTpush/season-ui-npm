export default [
    {
        path: '/test',
        name: 'test',
        component: r => require.ensure([], () => r(require('../docs/test.md')))
    }
]