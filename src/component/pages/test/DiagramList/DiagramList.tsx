import React, { FC, ReactComponentElement, ReactElement } from "react";
import { useState, useEffect, useRef } from "react";

import style from "./DiagramList.module.css"
export type PieType = {
  backgroundColor: string
  label: string
  value: number
  id: number
}
type propsType = {
  tableName: Array<string>
  objectName: Array<string>
  data: Array<PieType>
  daleteEl: (id: number) => void
  updateEl: () => void
}
const DiagramList: FC<propsType> = ({ data, objectName, tableName, daleteEl }) => {
  let th = tableName.map((el, index) => <th key={index}>{el}</th>)
  let test = (el: any, name: string): string => {
    return el[name]
  }
  let tdMaker = (el: PieType): Array<ReactElement> => {
    return objectName.map((name: string) => <td key={`${el.id} + ${name}`}>
      {test(el, name)}
    </td>)
  }
  let deleteElement = (id: number) => () => {
    daleteEl(id)
  }
  let test1 = (): Array<ReactElement> => {

    return data.map((el: PieType): ReactElement => {
      return (<tr key={el.id}>
        {tdMaker(el)}
        <td>Edit</td>
        <td >
          <button onClick={deleteElement(el.id)}>
            Delete
          </button>
        </td>

      </tr>)
    })
  }

  return (<table>
    <thead>
      <tr>
        {th}
      </tr>
    </thead>

    <tbody>
      {test1()}
    </tbody>
  </table>)
}


export default DiagramList;
