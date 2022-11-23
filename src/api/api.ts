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
   async getProfile(profileId:number) {
        const response = await instance.get(`profile/${profileId}`)
        return response.data
    },
    async getStatus(userId:number) {
        const response = await instance.get(`profile/status/${userId}`)
        return response.data
    },
    async updateStatus(statusText:string) {
        const response = await instance.put(`profile/status`, { status: statusText })
        return response.data
    },
}
export const AuthAPI = {
    async authMe() {
        const response = await instance.get(`auth/me`)
        return response.data
    },
    async login(email:string, password:string, rememberMe:boolean, captcha:string) {
        const response = await instance.post(`auth/login`, { email, password, rememberMe, captcha })
        return response.data
    },
    async logout() {
        const response = await instance.delete(`auth/login`)
        return response.data
    },
}
export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },
    async followUser(userId:number) {
        const response = await instance.post(`follow/${userId}`)
        return response.data
    },
    async unFollowUser(userId:number) {
        const response = await instance.delete(`follow/${userId}`)
        return response.data
    },
}
export const securityAPI = {
    async getCaptchaURL() {
        const response = await instance.get(`security/get-captcha-url`)
        return response.data
    },
}