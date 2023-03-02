import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react"
import { ProfileType } from "../../../api/api";
type propsType = {
  profile: ProfileType
  status: string
  autorizedUserId: number
  profileId: number
  isAuth: boolean
  isDarkTheme:boolean
  updateStatus: (status: string) => void
  setProfilePhoto: (photo: FormData) => void
  setProfileDetail: (aboutMe: ProfileType) => void
}
const Profile = (props: propsType) => {
  const isAutorizedUserId = props.autorizedUserId === props.profile?.userId
  // const array = [1, 25, 55, 77, -5, 108]
  // console.log("sort array", array.sort((a, b) => {
  //   if (a > b) return 1
  //   else return -1
  // }))

  // let myMapFunction = (array: Array<any>, callBack: Function) => {
  //   const result = []
  //   for (let i = 0; i < array.length; i++) {
  //     const element = array[i];
  //     result.push(callBack(element))
  //   }
  //   return result
  // }
  // console.log("myMapFunction",myMapFunction(array,(a:number)=>{return a+1}))
  // полиндром
  // const test = "ava"
  // const test1 = "awra"
  // const Polindrom = (str: string) => {
  //   let string = str.toLowerCase()
  //   return string === string.split("").reverse().join("")
  // }
  // console.log(Polindrom(test))
  // console.log(Polindrom(test1))

  return (<>
    <ProfileInfo profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      isAuth={props.isAuth}
      setProfilePhoto={props.setProfilePhoto}
      setProfileDetail={props.setProfileDetail}
      isAutorizedUserId={isAutorizedUserId}
      isDarkTheme={props.isDarkTheme}
    />
    {isAutorizedUserId &&
      <MyPostsContainer />
    }

  </>);
}

export default Profile;
