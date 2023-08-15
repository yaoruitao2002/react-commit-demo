import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

// 请求拦截
request.interceptors.request.use((config) => {
  return config; 
});
//响应
request.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
