import React, { FC, useEffect, useState } from "react";
import LableBlock from "../../../../../common/LableBlock/LableBlock";
import style from "./ProfileStatusWithHook.module.css"

type propstype = {
  status: string
  isAuth: boolean
  isAutorizedUserId: boolean
  updateStatus: (status: string) => void
}
const ProfileStatusWithHook: FC<propstype> = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  useEffect(() => {
    // выполняется после отрисовки
    setStatus(props.status)
  }, [props.status])
  const activateEditMode = () => {
    if (props.isAuth && props.isAutorizedUserId)
      setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)

    props.updateStatus(status)
  }
  const changeStatus = (e: any) => {
    setStatus(e.currentTarget.value)
  }
  let getStatus = (status: string) => {
    if (status) return status
    else if (!status && !props.isAutorizedUserId) return "The user has not entered a status"
    else return "Enter status"
  }
  return (<div>
    <LableBlock name="Status:" isBold margin={6}>
      {editMode ?
        <input autoFocus={true} onChange={changeStatus}
          value={status}
          onBlur={deActivateEditMode} type="text" />
        :
        <div title={props.isAutorizedUserId ? "Double click" : null} className={props.isAutorizedUserId ? style.set_status : ''}
          onDoubleClick={activateEditMode}>{getStatus(status)}
        </div>
      }
    </LableBlock>
  </div>)
}

export default ProfileStatusWithHook
