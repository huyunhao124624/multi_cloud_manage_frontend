/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const feeAnalyseRouter = {
    path: '/fee-analyse',
    component: Layout,
    redirect: '/fee-analyse/fee-calculate',
    meta: {
        title: '费用分析',
        icon: 'money'
    },
    children: [
        {
            path: 'fee-calculate',
            component: () => import('@/views/fee-analyse/fee-calculate'),
            name: 'feeCalculate',
            meta: {
                title: '费用计算'
            }
        },{
            path: 'fee-usage',
            component: () => import('@/views/fee-analyse/fee-usage'),
            name: 'feeUsage',
            meta: {
                title: '费用使用'
            }
        }

    ]
}
export default feeAnalyseRouter
