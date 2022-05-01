import request from '@/utils/request'


export function getFeeAnalyseDepartmentList(){
    return request({
        url: '/fee/getFeeAnalyseDepartmentList',
        method: 'post',
    })
}

export function getDepartmentDifferentRoundUsage(data){
    return request({
        url: '/fee/getDepartmentDifferentRoundUsage',
        method: 'post',
        data,
    })
}

export function getDepartmentDifferentRoundFee(data){
    return request({
        url: '/fee/getDepartmentDifferentRoundFee',
        method: 'post',
        data,
    })
}
