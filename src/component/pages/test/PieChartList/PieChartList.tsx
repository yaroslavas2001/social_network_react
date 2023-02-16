import React, { FC, ReactElement } from "react";
import { useState, } from "react";
import { PieTypeModel } from "../Models/Models";
import PieChartItem from "./PieChartItem/PieChartItem";

import style from "./PieChartList.module.css"

type propsType = {
  tableName: Array<string>
  data: Array<PieTypeModel>
  daleteItem: (id: number) => void
  updateItem: (item: PieTypeModel) => void
}
const PieChartList: FC<propsType> = ({ data, tableName, daleteItem, updateItem }) => {
  let th = tableName.map((el, index) => <th key={index}>{el}</th>)

  let [editItem, setEditItem] = useState<number>(null)

  let deleteItem = (id: number) => {
    daleteItem(id)
  }
  let setIdEditMode = (id: number) => {
    setEditItem(id)
  }
  let saveItem = (item: PieTypeModel) => {
    updateItem(item)
    setEditItem(null)
  }
  let canselItem = () => {
    setEditItem(null)
  }
  let itemList = data.map((item: PieTypeModel) => <PieChartItem
    key={item.id}
    item={item}
    editItem={editItem}
    deleteItem={deleteItem}
    updateItem={updateItem}
    setIdEditMode={setIdEditMode}
    saveItem={saveItem}
    canselItem={canselItem}
  />
  )

  return (<table>
    <thead>
      <tr>
        {th}
      </tr>
    </thead>
    <tbody>
      {itemList}
    </tbody>
  </table>)
}


export default PieChartList;
