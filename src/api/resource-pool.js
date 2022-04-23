import request from '@/utils/request'

export function getAllResourcePoolList(data){
    return request({
        url: '/resourcePool/getAllResourcePoolList',
        method: 'post',
        data
    })
}

export function getAllResourcePoolTypeList(data){
    return request({
        url: '/resourcePool/getAllResourcePoolTypeList',
        method: 'post',
        data
    })
}

export function updateResourcePool(data){
    return request({
        url: '/resourcePool/updateResourcePool',
        method: 'post',
        data
    })
}

export function addResourcePool(data){
    return request({
        url: '/resourcePool/addResourcePool',
        method: 'post',
        data
    })
}

export function deleteResourcePoolById(data){
    return request({
        url: '/resourcePool/deleteResourcePoolById',
        method: 'post',
        data
    })
}