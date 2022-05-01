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