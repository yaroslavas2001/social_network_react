
import { Field, Form, Formik, useFormikContext } from "formik";
import React, { FC, useState } from "react";
import DiagramList from "./DiagramList/DiagramList";
import PieChart, { PieType } from "./Diagrams/PieChart";

const Test = () => {
  let test: Array<PieType> = [
    {
      label: 'apple',
      backgroundColor: 'red',
      value: 80,
      id: 1
    },
    {
      label: 'applepie',
      backgroundColor: 'yellow',
      value: 7,
      id: 2
    },
    {
      label: 'orange',
      backgroundColor: 'orange',
      value: 53,
      id: 3
    },
    {
      label: 'orange',
      backgroundColor: 'blue',
      value: 10,
      id: 4
    },
  ]
  let [data, changeData] = useState<Array<PieType>>(test)
  let changeDataArray = (item: PieType) => {
    changeData(data.concat([item]))
  }
  let updateEl = () => {

  }
  let daleteEl = (id: number) => {
    changeData(data.filter((el) => el.id !== id))
  }
  return (<>

    <TestForm changeData={changeDataArray} />
    <DiagramList data={data} tableName={["Name", "Value", "Color", 'Edit', "Delete"]}
      objectName={["label", "value", "backgroundColor"]}
      updateEl={updateEl}
      daleteEl={daleteEl}
    />
    <PieChart title="test" data={data} />
  </>);
}

const TestForm = (props: any) => {
  const onSubmit = (values: any, actions: any) => {
    let el: PieType = {
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
      <Form>
        <Field name="text" type="text" placeholder="Enter text" />
        <Field name="number" type="number" />
        <Field name="backgroundColor" type="color" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  )
}

export default Test;
