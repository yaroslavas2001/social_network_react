import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import TestRenderer from 'react-test-renderer';

describe("ProfileStatus componrnt", () => {

  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="test status" />)
    // component.getInstance() - получить экземпляр объекта
    const instance = component.getInstance()
    expect(instance.state.status).toBe("test status")
  });
  test('after creation <span> should be displayed', () => {
    const component = TestRenderer.create(<ProfileStatus status="test status" />)
    const root = component.root
    expect(root.findByType("span")).not.toBeNull()
  });
  test('after creation <input> shouldn"t be displayed', () => {
    const component = TestRenderer.create(<ProfileStatus status="test status" />)
    const root = component.root
    expect(() => {
      root.findByType("input")
    }).toThrow()
  });
  test('after creation <span> should contains correct status', () => {
    const component = TestRenderer.create(<ProfileStatus status="test status" />)
    const root = component.root
    const span = root.findByType("span")
    expect(span.props.children).toBe("test status")
  });
  test('input should be displayed in editMode instead of span', () => {
    const component = TestRenderer.create(<ProfileStatus status="test status" />)
    const root = component.root
    const span = root.findByType("span")
    span.props.onDoubleClick()
    let input = root.findByType("input")
    expect(input.props.value).toBe("test status")
  });
  test('callback should be called', () => {
    const mockCallback = jest.fn()
    const component = TestRenderer.create(<ProfileStatus
      status="test status" updateStatus={mockCallback} />)
    const instance = component.getInstance()
    instance.deActivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  });
})