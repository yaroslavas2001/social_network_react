import React from "react"
import { PieTypeModel } from "./Models/Models"
import Test from "./Test"


class TestContainer extends React.Component<any> {
  testData: Array<PieTypeModel> = [
    {
      label: 'apple',
      backgroundColor: '#e66465',
      value: 80,
      id: 1
    },
    {
      label: 'applepie',
      backgroundColor: '#ffffff',
      value: 7,
      id: 2
    },
    {
      label: 'orange',
      backgroundColor: '#f6b23c',
      value: 53,
      id: 3
    },
    {
      label: 'orange',
      backgroundColor: '#000000',
      value: 10,
      id: 4
    },
  ]
  render() {
    return (<Test data={this.testData}/>)
  }
}
export default TestContainer
