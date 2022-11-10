import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const ProfileStatusWithHook = (props) => {
  // let stateWithSetState = useState(true)
  // let editMode = stateWithSetState[0]
  // let setEditMode = stateWithSetState[1]
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  useEffect(()=>{
    // выполняется после отрисовки
    setStatus(props.status)
  },[props.status])
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)

    props.updateStatus(status)
  }
  const changeStatus = (e) => {
    setStatus(e.currentTarget.value)

  }
  return (<div>
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
