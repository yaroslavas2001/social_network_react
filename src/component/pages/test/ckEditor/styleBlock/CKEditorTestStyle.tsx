
import React, { FC, useEffect, useState } from "react";
import style from "./CKEditorTestStyle.module.css"
import EditorModel from "./EditorModel";
type propsType = {
  isShow: boolean
  activeColor: string
  isBoldActive: boolean
  isStrikeActive: boolean
  isItalicActive: boolean
  isUnderlineActive: boolean
  editorModel: EditorModel
  chooseLetter: (letter: string) => void
  chooseColor: (color: string) => void
}

const CKEditorTestStyle: FC<propsType> = (props) => {
  let [position, setPosiition] = useState<EditorModel>(props.editorModel)

  let colors: Array<string> = [
    "rgb(0, 0, 0)",
    "rgb(242, 48, 81)",
    "rgb(24, 115, 242)",
    "rgb(48, 191, 19)",
    "rgb(255, 170, 0)",]
  let arrayLetterBtn = [
    {
      letter: 'B',
      styleLeter: "Bbold",
      isActive: props.isBoldActive
    },
    {
      letter: 'I',
      styleLeter: "italic",
      isActive: props.isItalicActive
    },
    {
      letter: 'U',
      styleLeter: "underline",
      isActive: props.isUnderlineActive
    },
    {
      letter: 'S',
      styleLeter: "strike",
      isActive: props.isStrikeActive
    },
  ]
  useEffect(() => {
    setPosiition(props.editorModel)
  }, [props.editorModel])
  let chooseColor = (color: string) => {
    props.chooseColor(color)
  }
  let chooseLetter = (letter: string) => () => {
    props.chooseLetter(letter)
  }
  const colorButtom = colors.map((el) => {
    return <button key={el}
      className={`${style.color_btn}  ${props.activeColor === el ? style.active_color : ""}`} style={{ background: el }} onClick={(e) => { chooseColor(el) }}></button>
  })
  const letterButtom = arrayLetterBtn.map((el) => {
    return <button key={el.letter}
      className={`${style.letter_btn}  ${el.isActive ? style.active_letter : ""}`} onClick={chooseLetter(el.styleLeter)}>{el.letter}</button>
  })
  let stylePosition = {
    display: props.isShow ? "flex" : 'none',
    top: position.y + 'px',
    left: position.x - 60 + 'px',
  }
  return (<div
    style={stylePosition}
    className={style.block}>
    {colorButtom}
    {letterButtom}
  </div>);
}



export default CKEditorTestStyle;
