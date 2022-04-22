import request from '@/utils/request'

export function getAllResourcePoolList(data){
    return request({
        url: '/resourcePool/getAllResourcePoolList',
        method: 'post',
        data
    })
}