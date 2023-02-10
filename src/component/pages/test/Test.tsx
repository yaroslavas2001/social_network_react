
import React from "react";
import PieChart, { PieType } from "./Diagrams/PieChart";

const Test = () => {
  let test: Array<PieType> = [
    {
      label: 'apple',
      backgroundColor: 'red',
      value: 80
    },
    {
      label: 'applepie',
      backgroundColor: 'yellow',
      value: 577
    },
    {
      label: 'orange',
      backgroundColor: 'orange',
      value: 53
    },
    {
      label: 'orange',
      backgroundColor: 'blue',
      value: 10
    },
  ]
  return (<>
    <PieChart title="test" data={test} />
  </>);
}

export default Test;
