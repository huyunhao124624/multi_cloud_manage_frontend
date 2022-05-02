import Layout from '@/layout'
const userManageRouter = {
    path: '/user-manage',
    component: Layout,
    redirect: '/user-manage/account-manage',
    // name: 'excel',
    meta: {
        title: 'user-manage',
        icon: 'peoples'
    },
    children: [
        {
            path: 'account-manage',
            component: () => import('@/views/user-manage/account-manage'),
            name: 'AccountManage',
            meta: { title: 'account' }
        }
    ]
}

export default userManageRouter