import React, { FC, ReactElement } from "react";
import { PieTypeModel } from "../Models/Models";
import { Field, Form, Formik, useFormikContext } from "formik";

import style from "./PieChartAddForm.module.css"

type propsType = {
  changeData: (item: PieTypeModel) => void
}
let PieChartAddForm: FC<propsType> = (props) => {
  const onSubmit = (values: any, actions: any) => {
    let el: PieTypeModel = {
      label: values.text,
      value: values.number,
      backgroundColor: values.backgroundColor,
      id: Math.random(),
    }
    props.changeData(el)
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={{ text: '', number: 0, backgroundColor: "#000000" }}
      onSubmit={onSubmit}
    >
      <Form className={style.block}>
        <Field name="text" type="text" placeholder="Enter text" className={style.input} />
        <Field name="number" type="number" className={style.input} />
        <Field name="backgroundColor" type="color"  className={style.input} />
        <button type="submit" className={style.btn}>Add</button>
      </Form>
    </Formik>
  )
}

export default PieChartAddForm;
