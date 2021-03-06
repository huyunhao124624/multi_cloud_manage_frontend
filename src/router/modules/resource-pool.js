import Layout from '@/layout'

const resourcePoolRouter = {
    path: '/resource-pool',
    component: Layout,
    redirect: '/resource-pool/resource-pool-manage',
    meta: {
        title: 'resource-pool',
        icon: 'el-icon-box',
        roles: ['3','5']
    },
    children: [
        {
            path: 'resource-pool-manage',
            component: () => import('@/views/resource-pool/resource-pool-manage'),
            name: 'resourcePoolManage',
            meta: {
                title: '资源池管理',
                roles: ['3','5']
            }
        }
    ]
}

export default resourcePoolRouter;