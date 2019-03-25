import axios from 'axios';

let base = 'http://localhost:3000/inexbot';

//登录操作
export const requestLogin = params => {
    return axios.post(`/login`, params)
        .then(res => res.data);
};

//机械臂模式
export const requestMode = params => {
    return axios.post(`${base}/2101/{"mode":${params.mode}`, params)
        .then(res => res.data);
};

//机械臂状态
export const requestState = params => {
    return axios.post(`${base}/2001/{"robot":1,"status":${params.state}`, params)
        .then(res => res.data);
};

//启停控制
export const requestStart = params => {
    return axios.post(`${base}/2501/{"jobname":"WERTY","line":1,"robot":1}`, params)
        .then(res => res.data);
};

// export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
//
// export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };
//
// export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };
//
// export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };
//
// export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };
//
// export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
