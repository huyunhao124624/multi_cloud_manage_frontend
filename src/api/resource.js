import request from '@/utils/request'

export function getInitApplyResourcePageObject(){
    return request({
        url: '/resource/getInitApplyResourcePageObject',
        method: 'post',
    })
}