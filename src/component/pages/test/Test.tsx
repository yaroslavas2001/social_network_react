
import React, { FC, useState } from "react";
import PieChartAddForm from "./PieChartAddForm/PieChartAddForm";
import PieChartList from "./PieChartList/PieChartList";
import PieChart from "./PieChart/PieChart";
import { PieTypeModel } from "./Models/Models";
import style from "./Test.module.css"
import CKEditorTest from "./ckEditor/CKEditorTest";
import img from "./../../../assets/image.png"
type propsType = {
  data: Array<PieTypeModel>
}
const Test: FC<propsType> = (props) => {
  let value: string =
    `cthcftycrty <strike>rtymftyub</strike> <b>tybdr</b> ybeyey <i>thcftycrty</i> rtymftyub <u>tybdr</u> ybeye <span style='color:rgb(242, 48, 81)'>thcftycrty</span> rtymftyub tybdr ybeye thcftycrty rtymftyub tybdr ybeye thcftycrty rtymftyub tybdr ybeye`;

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
    <CKEditorTest value={value} />
    <div className={style.fon}>
      <div className={style.block_img}>
        <img className={style.img} src={img} alt="" />
        <div className={style.letter}>CR<br/>EATE</div>
      </div>
    </div>

  </div>);
}



export default Test;
