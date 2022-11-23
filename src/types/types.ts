export type PhotosType = {
    small: string | null
    large: string | null
}
export type UsersType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    followed: boolean
}