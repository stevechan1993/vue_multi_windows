import axios from "axios";

const instance = axios.create({
  // 接口地址的base_url
  baseURL: "http://localhost:3000",
  // 请求超时时间
  timeout: 10000
});

// request拦截器
instance.interceptors.request.use(
  config => {
    // 发送请求之前可修改配置
    return config;
  },
  error => {
    // 处理错误
    return Promise.reject(error);
  }
);

// respone拦截器
instance.interceptors.response.use(
  response => {
    //修改返回数据
    return response;
  },
  error => {
    // 处理错误
    return Promise.reject(error);
  }
);
export default instance;
