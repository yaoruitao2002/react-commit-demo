// 封装请求函数
import request from "./request";

// 获取所有
export function getStulist() {
  return request({
    url: "/students",
    method: "GET",
  });
}

// 新增
export function addStusvalue(data) {
  return request({
    url: "/students",
    method: "post",
    data,
  });
}

// 查询
export function setStusbayId(id) {
  return request({
    url: `/students/${id}`,
    method: "get",
  });
}

// 删除
export function deleteList(id) {
  return request({
    url: `/students/${id}`,
    method: "delete",
  });
}


export function editStatuslist(id,data){
  return request({
    url:`/students/${id}`,
    method:"patch",
    data,
  })
}