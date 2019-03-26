import request from "../axios";

export function adminLogin(data) {
  return request({
    url: "/admin/login",
    method: "get",
    params: data
  });
}
