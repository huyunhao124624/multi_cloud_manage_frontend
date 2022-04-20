import request from '@/utils/request'

export function getAccountList(data) {
    console.log(data)
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