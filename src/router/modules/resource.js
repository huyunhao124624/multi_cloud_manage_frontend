/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const resourceRouter = {
    path: '/resource',
    component: Layout,
    redirect: '/resource/apply-resource',
    meta: {
        title: '云资源',
        icon: 'el-icon-folder'
    },
    children: [
        {
            path: 'apply-resource',
            component: () => import('@/views/resource/apply-resource'),
            name: 'applyResource',
            meta: {
                title: '申请资源'
            }
        },
        {
            path: 'resource-list',
            component:() => import("@/views/resource/get-resources"),
            meta: {
                title: '资源列表'
            }
        }
    ]
}
export default resourceRouter
