import React from "react";
import { create } from "react-test-renderer";
import TestRenderer from 'react-test-renderer';
import Paginator from "./Paginator";

describe("Paginator componrnt", () => {
  test('pages count is 11 but should be showed only 10', () => {
    const component = TestRenderer.create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>)
    const root = component.root
    let spans = root.findAllByType("span")
    expect(spans.length).toBe(10)
  });
  test('if pages count is more than 10 button Next shoud be present', () => {
    const component = TestRenderer.create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>)
    const root = component.root
    let button = root.findAllByType("button")
    expect(button.length).toBe(1)
  });
})