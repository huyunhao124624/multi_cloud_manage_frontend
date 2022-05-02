/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const feeAnalyseRouter = {
    path: '/fee-analyse',
    component: Layout,
    redirect: '/fee-analyse/fee-calculate',
    meta: {
        title: '费用分析',
        icon: 'money',
        roles: ['1','3','5']
    },
    children: [
        {
            path: 'fee-calculate',
            component: () => import('@/views/fee-analyse/fee-calculate'),
            name: 'feeCalculate',
            meta: {
                title: '费用计算',
                roles: ['1','3','5']
            }
        },{
            path: 'fee-usage',
            component: () => import('@/views/fee-analyse/fee-usage'),
            name: 'feeUsage',
            meta: {
                title: '费用使用',
                roles: ['1','3','5']
            }
        }

    ]
}
export default feeAnalyseRouter
