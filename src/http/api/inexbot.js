import request from "../axios";

/* Teach Mode */
export function inexbotMode0(data) {
  return request({
    url: "/inexbot/2101/{\"mode\":0}",
    method: "get",
    params: data
  });
}

/* Repeat Mode */
export function inexbotMode2(data) {
  return request({
    url: "/inexbot/2101/{\"mode\":2}",
    method: "get",
    params: data
  });
}

/* Pause */
export function inexbotStatus0(data) {
  return request({
    url: "/inexbot/2001/{\"robot\":1,\"status\":0}",
    method: "get",
    params: data
  });
}

/* Ready */
export function inexbotStatus1(data) {
  return request({
    url: "/inexbot/2001/{\"robot\":1,\"status\":1}",
    method: "get",
    params: data
  });
}

/* Start */
export function inexbotStart(data) {
  return request({
    url: "/inexbot/2501/{\"jobname\":\"WERTY\",\"line\":1,\"robot\":1}",
    method: "get",
    params: data
  });
}

/* HeartBeat */
export function inexbotHeartBeat(data) {
  return request({
    url: "/inexbot/heartbeat",
    method: "get",
    params: data
  });
}

/*TODO Stop */
export function inexbotStop(data) {
  return request({
    url: "/inexbot/",
    method: "get",
    params: data
  });
}


