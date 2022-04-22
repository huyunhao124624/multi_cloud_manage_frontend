import request from '@/utils/request'

export function getAccountList(data) {
    // console.log(data)
    return request({
      // url: '/vue-element-admin/user/info',
      url: '/user/getAccountList',
      method: 'post',
      data
      // params: { token }
    })
  }
  
export function getAllRoleList(){
    return request({
        url: '/role/getAllRoleList',
        method: 'post',

    })
}

export function getDepartmentList(){
    return request({
        url: '/department/getAllDepartmentList',
        method: 'post',
    })
}

export function updateAccount(data){
    return request({
        url: '/user/updateAccount',
        method: 'post',
        data
    })
}

export function addAccount(data){
    return request({
        url: '/user/addAccount',
        method: 'post',
        data
    })
}