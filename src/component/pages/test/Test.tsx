
import React, { FC, useState } from "react";
import PieChartAddForm from "./PieChartAddForm/PieChartAddForm";
import PieChartList from "./PieChartList/PieChartList";
import PieChart from "./PieChart/PieChart";
import { PieTypeModel } from "./Models/Models";
import style from "./Test.module.css"
type propsType = {
  data: Array<PieTypeModel>
}
const Test: FC<propsType> = (props) => {

  let [data, changeData] = useState<Array<PieTypeModel>>(props.data)

  let addItem = (item: PieTypeModel) => {
    changeData(data.concat([item]))
  }
  let updateItem = (item: PieTypeModel) => {
    changeData(data.map(el => el.id === item.id ? item : el))
  }
  let daleteItem = (id: number) => {
    changeData(data.filter((el) => el.id !== id))
  }
// стили на добавление, стили таблицы и размеры канвы подогнать
  return (<div className={style.block}>
    <PieChart title="Fruit" data={data} />
    <div>
      <PieChartAddForm changeData={addItem} />
      <PieChartList data={data} tableName={["Name", "Value", "Color", 'Edit', "Delete"]}
        updateItem={updateItem}
        daleteItem={daleteItem}
      />
    </div>
  </div>);
}



export default Test;
