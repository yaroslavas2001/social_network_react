
import React, { FC, useRef, useState } from "react";
import { CKEditor, CKEditorInstance, CKEditorNamespace, CKEditorNamespaceEventName, CKEditorNamespaceHandler } from 'ckeditor4-react';
import CKEditorTestStyle from "./styleBlock/CKEditorTestStyle"
import EditorModel from "./styleBlock/EditorModel";
import style from "./CKEditorTest.module.css"
declare var CKEDITOR: any;

type propsType = {
  value: string
}

const CKEditorTest: FC<propsType> = (props) => {
  let [value, setValue] = useState(props.value)
  let [ckEditor, setCkEditior] = useState<CKEditorNamespace>()

  let [isShow, setIsShow] = useState(false)
  let [editorModel, setEditorModel] = useState<EditorModel>(
    {
      y: 0,
      x: 0,
    }
  )
  let [fontSize, setFontSize] = useState(17)

  let [activeColor, setActiveColor] = useState('')
  let [isBoldActive, setIsBoldActive] = useState(false)
  let [isStrikeActive, setIsStrikeActive] = useState(false)
  let [isItalicActive, setIsItalicActive] = useState(false)
  let [isUnderlineActive, setiIUnderlineActive] = useState(false)

  let configObject = {
    pasteFromWordRemoveFontStyles: true,
    pasteFromWordRemoveStyles: true,
    forcePasteAsPlainText: true,
    toolbar: [{}],
    allowedContent: "strike b i u;" + "span{!color}",
    disallowedContent: "p;" + "script;",
    removeButtons: "Subscript,Superscript,PasteFromWord",
    extraPlugins: "autogrow,colorbutton",
    enterMode: Number(2),
    removePlugins:
      "liststyle,tableselection,tabletools,tableresize,contextmenu,pastefromword",
    title: false,
    fillEmptyBlocks: false,
  }
  let chooseLetter = (letter: string) => {
    if (letter === 'Bbold') {

    } else if (letter === 'italic') {

      console.log("editor", ckEditor)
      return
      if (isItalicActive) {

        // ckEditor.instance.removeStyle(new CKEDITOR.style({ element: "i" }));
        // // ckEditor.instance.removeStyle(new CKEDITOR.style({ element: "i" }));
        // setIsItalicActive(false)
        // console.log("value",value)
      } else {
        ckEditor.instance.applyStyle(new CKEDITOR.style({ element: "i" }));

        // ckEditor.instance.applyStyle(new CKEDITOR.style({ element: "i" }));
        setIsItalicActive(true)
      }
    } else if (letter === 'underline') {

    } else if (letter === 'strike') {

    }

  }

  let chooseColor = (color: string) => {
    setActiveColor(color)
    setIsShow(false)
    // ckEditor.instance.applyStyle(
    //   new CKEDITOR.style(this.getStyleColorSetting(), { color: color })
    // );
    // this.emit();
    // this.ckeditorTextStyleHide;
  }
  let getSelectionData = (target: any, container: any) => {
    var sel, range;
    var res = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      text: "",
    };
    if (target.getSelection) {
      sel = target.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0).cloneRange();
        if (range.getClientRects) {
          var rect = range.getClientRects()[0];
          if (!rect) return undefined;
          var containerOffset = container.getBoundingClientRect();
          var rectRange = range.getBoundingClientRect();
          res.height = rect.height;
          res.x = (rect.left - containerOffset.left) + rect.width / 2;
          let different = rect.y - containerOffset.y
          let heightText = rectRange.bottom - rectRange.top
          res.y = heightText + different;
          var resText = sel.toString();
          res.text = resText;
          let test = {
            x: res.x,
            y: res.y
          }
          setEditorModel(test)
          return res;
        }
      }
    }
    return undefined;
  }
  let onReady = (editor: any) => {
    if (!editor.document) return;
    // setCkEditior(editor)
    editor.document.$.addEventListener("selectionchange", function (e: any) {
      // if (
      //   document.activeElement !== ckEditor.$el &&
      //   !self.ckEditor.$el.contains(document.activeElement)
      // )
      //   return;
      var data = getSelectionData(e.target, editor.container.$);
      if (!!data && !!data.text) {
        editorModel = {
          x: data.x,
          y: data.y,
          // Instance: editor,
          // Text: data.text,
          // Position: "absolute",
        };
        // console.log("TExt",editorModel)
        SelectStart(editor);
        if (!!data.text.trim()) setIsShow(true)
      } else {
        setIsShow(false)
      }
    });
  }
  let getNoTextNode = (node: Node) => {
    if (node.nodeType == 3) return node.parentNode;
    else return node;
  }
  let SelectStart = (editor: any) => {
    const range = window.getSelection().getRangeAt(0);
    const start = range.startContainer;
    const end = range.endContainer;
    const commonAncestorContainer = range.commonAncestorContainer;
    let ck = editor;
    // let root = ck.querySelector(".cke_editable");
    // if (start == root && end == root) {
    //   setIsShow(false)
    // }

    const startContainer = getNoTextNode(start);
    let element: Node;
    const endContainer = getNoTextNode(end);

    if (startContainer == commonAncestorContainer) element = endContainer;
    else if (endContainer == commonAncestorContainer) element = startContainer;
    else element = endContainer;

    const End = window.getComputedStyle(element as HTMLElement);
    const EndTextDecor: string = (End as any).webkitTextDecorationsInEffect;


    // цвет
    setActiveColor(End.color)
    //стили
    if (EndTextDecor.includes("line-through"))
      setIsStrikeActive(true)
    else setIsStrikeActive(false)
    if (End.fontStyle == "italic") setIsItalicActive(true);
    else setIsItalicActive(false);
    if (EndTextDecor.includes("underline")) setiIUnderlineActive(true);
    else setiIUnderlineActive(false)
    if (Number(End.fontWeight) == 700) setIsBoldActive(true);
    else setIsBoldActive(false);
  }
  return (<div className={style.main_block}>
    <CKEditor
      config={configObject}
      // debug={true}
      initData={value}

      name="my-ckeditor"
      onNamespaceLoaded={CKEDITOR => {
        // console.log("CKEDITOR",CKEDITOR)
        // Handles `namespaceLoaded` event which is fired once the CKEDITOR namespace is loaded.
        // This event is emitted only once.
      }}
      onBeforeLoad={CKEDITOR => {
        setCkEditior(CKEDITOR)

        // Handles `beforeLoad` event which is fired before an editor instance is created.
      }}
      onInstanceReady={({ editor }) => {
        onReady(editor)
        // Handles native `instanceReady` event.
      }}
      onFocus={({ editor }) => {
        // Handles native `focus` event.
      }}

      // {...otherEventHandlers}
      readOnly={false}
      type="inline"
    // style={{ borderColor: 'blue' }}
    />

    <CKEditorTestStyle
      isShow={isShow}
      editorModel={editorModel}
      isStrikeActive={isStrikeActive}
      isBoldActive={isBoldActive}
      isItalicActive={isItalicActive}
      isUnderlineActive={isUnderlineActive}
      chooseLetter={chooseLetter}
      chooseColor={chooseColor}
      activeColor={activeColor}
    />
  </div>);
}



export default CKEditorTest;
