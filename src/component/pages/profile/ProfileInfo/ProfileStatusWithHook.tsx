import React, { FC, useEffect, useState } from "react";


type propstype = {
  status: string
  isAuth:boolean
  updateStatus: (status: string) => void
}
const ProfileStatusWithHook: FC<propstype> = (props) => {
  // let stateWithSetState = useState(true)
  // let editMode = stateWithSetState[0]
  // let setEditMode = stateWithSetState[1]
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  useEffect(() => {
    // выполняется после отрисовки
    setStatus(props.status)
  }, [props.status])
  const activateEditMode = () => {
    if(props.isAuth)
    setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)

    props.updateStatus(status)
  }
  const changeStatus = (e: any) => {
    setStatus(e.currentTarget.value)

  }
  return (<div>
    Статус:
    {!editMode &&
      <div onDoubleClick={activateEditMode}>{
        status || "---"}</div>
    }
    {editMode &&
      <div>
        <input autoFocus={true} onChange={changeStatus}
          value={status}
          onBlur={deActivateEditMode} type="text" />
      </div>
    }
  </div>)
}

export default ProfileStatusWithHook
