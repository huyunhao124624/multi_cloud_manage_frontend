import request from '@/utils/request'

export function getInitApplyResourcePageObject(){
    return request({
        url: '/resource/getInitApplyResourcePageObject',
        method: 'post',
    })
}

export function getResourceList(data){
    return request({
        url: '/resource/getResourceList',
        method: 'post',
        data
    })
}

export function applyResource(data){
    return request({
        url: '/resource/applyResource',
        method: 'post',
        data
    })
}

export function releaseResource(data){
    return request({
        url: '/resource/releaseResource',
        method: 'post',
        data
    })
}