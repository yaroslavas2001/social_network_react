import axios from "axios"
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b67629cf-3e35-4a5e-a5dc-feb693c91523"
    }
})
// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
//   withCredentials: true, headers: {
//     "API-KEY": "7741aeff-4475-4c99-8e86-0fb98b53e58f"
//   }
// }).then(response => {
//   if (response.data.resultCode === 0) {
//     console.log("response", response.data)
//     props.unFollow(el.id)
//   }
// })
export const profileAPI = {
    getProfile(profileId) {
        return instance.get(`profile/${profileId}`).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(statusText) {
        return instance.put(`profile/status`, { status: statusText }).then(response => response.data)
    },
}
export const AuthAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha }).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    },
}
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
}
export const securityAPI = {
    getCaptchaURL() {
        return instance.get(`security/get-captcha-url`).then(response => response.data)
    },
}