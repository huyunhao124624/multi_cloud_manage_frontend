import Layout from '@/layout'
const userManageRouter = {
    path: '/user-manage',
    component: Layout,
    redirect: '/user-manage/account-manage',
    // name: 'excel',
    meta: {
        title: '用户管理',
        icon: 'peoples',
        roles: ['3'],
    },
    children: [
        {
            path: 'account-manage',
            component: () => import('@/views/user-manage/account-manage'),
            name: 'AccountManage',
            meta: {
                title: '账户管理',
                roles: ['3']
            }
        }
    ]
}

export default userManageRouter