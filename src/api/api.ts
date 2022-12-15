import axios from "axios"
import { PhotosType } from "../types/types"
const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b67629cf-3e35-4a5e-a5dc-feb693c91523"
    }
})
const instancePhoto = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b67629cf-3e35-4a5e-a5dc-feb693c91523",
        "Content-Type": " multipart/form-data"
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
export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    Capcha = 10
}
type ResponseType<T> = {
    data: T
    resultCode: ResultCodeEnum
    messages: Array<string>
}
export type ProfileContactsType = {
    // skype?: string
    // icq?: string
    // email?: string
    // googlePlus?: string
    // whatsApp?: string
    twitter: string
    instagram: string
    vk: string
    facebook: string
    github: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: PhotosType
    aboutMe: string

}
// export type ProfileDetailType = {
//     userId: number
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     contacts: ProfileContactsType
//     aboutMe: string
// }
export const profileAPI = {
    async getProfile(profileId: number) {
        const response = await instance.get<ProfileType>(`profile/${profileId}`)
        return response.data
    },
    async getStatus(userId: number) {
        const response = await instance.get(`profile/status/${userId}`)
        return response.data
    },
    async updateStatus(statusText: string) {
        const response = await instance.put<ResponseType<{}>>(`profile/status`, { status: statusText })
        return response.data
    },
    async setProfileDetail(aboutMe: ProfileType) {
        const response = await instance.put(`profile`, aboutMe)
        return response.data
    },
    async setProfilePhoto(formData: FormData) {
        const response = await instancePhoto.put(`profile/photo`, formData)
        return response.data
    },
}
export const dialogAPI = {
    async getDialogs() {
        const response = await instance.get(`dialogs`)
        return response.data
    },
    async startDialog(dialogId: number) {
        const response = await instance.put<any>(`dialogs/${dialogId}`)
        return response.data
    },
    async getListOfMessage(userId: number) {
        const response = await instance.get<any>(`dialogs/${userId}/messages`)
        return response.data
    },
    async sendMessage(userIdFriend: number, message: string) {
        const response = await instance.post<any>(`dialogs/${userIdFriend}/messages`, { message })
        return response.data
    },
    async isYourMessageViewed(messageId: number) {
        const response = await instance.get<any>(`dialogs/messages/${messageId}/viewed`,)
        return response.data
    },
    async spamMessage(messageId: number) {
        const response = await instance.post<any>(`dialogs/messages/${messageId}/spam`,)
        return response.data
    },
    async deleteForMe(messageId: number) {
        const response = await instance.delete<any>(`dialogs/messages/${messageId}`,)
        return response.data
    },
    async restoreMessage(messageId: number) {
        const response = await instance.get<any>(`dialogs/messages/${messageId}/restore`,)
        return response.data
    },
    async returnMessage(userId: number, date: Date) {
        const response = await instance.get<any>(`dialogs/${userId}/messages/new?newerThen=${date}`,)
        return response.data
    },
    async listOfNewMessages(userId: number, date: Date) {
        const response = await instance.get<any>(`dialogs/messages/new/count`,)
        return response.data
    },
}
type authMeType = {
    id: number
    email: string
    login: string
}
type LoginTYpe = {
    userId: number
}

export const AuthAPI = {
    async authMe() {
        const response = await instance.get<ResponseType<authMeType>>(`auth/me`)
        return response.data
    },
    async login(email: string, password: string, rememberMe: boolean, captcha: string) {
        const response = await instance.post<ResponseType<LoginTYpe>>(`auth/login`, { email, password, rememberMe, captcha })
        return response.data
    },
    async logout() {
        const response = await instance.delete<ResponseType<{}>>(`auth/login`)
        return response.data
    },
}
type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: string
    followed: boolean
}
type UserSType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10, term: string = '', friend?: boolean) {
        let url = `users?page=${currentPage}&count=${pageSize}`
        if (term.length > 0) url = url + `&term=${term}`
        if (friend != (undefined || null)) url = url + `&friend=${friend}`
        const response = await instance.get<UserSType>(url)
        return response.data
    },
    async followUser(userId: number) {
        const response = await instance.post<ResponseType<{}>>(`follow/${userId}`)
        return response.data
    },
    async unFollowUser(userId: number) {
        const response = await instance.delete<ResponseType<{}>>(`follow/${userId}`)
        return response.data
    },
}
type CaptchaType = {
    url: string
}
export const securityAPI = {
    async getCaptchaURL() {
        const response = await instance.get<CaptchaType>(`security/get-captcha-url`)
        return response.data
    },
}