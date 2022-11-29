import React, { FC, useState } from "react"
import style from "./Paginator.module.css"
import back from "./../../style/back.png"
import forward from "./../../style/forward.png"
import { useEffect } from "react";

type propsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  currentPortion: number
  portionSize?: number
  onPageCanged: (page: number) => void
  setCurrentPortion: (portion: number) => void
}
const Paginator: FC<propsType> = ({ totalItemsCount, pageSize, currentPage, currentPortion,
  onPageCanged, setCurrentPortion, portionSize = 10 }) => {
  //по currentPage узнать в какой порции находимся, после перехода на 
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  // количество порций этих страничек
  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState<number>(0)

  let isShowLeft = portionNumber !== 0
  let isShowRight = portionCount !== portionNumber + 1
  const right = () => {
    setPortionNumber(portionNumber + 1)
  }
  const left = () => {
    setPortionNumber(portionNumber - 1)
  }
  useEffect(() => {
    // выполняется после отрисовки
    changePortion(changePortionPages())
  }, [portionNumber])

  const changePortionPages = (): Array<number> => {
    let test: Array<number> = []
    for (let i = 1; i <= portionSize; i++) {
      let passedItems = (i + (portionSize * portionNumber)) * pageSize
      let isAllShown = (passedItems - totalItemsCount) < pageSize
      if (isAllShown) {
        test.push(i + (portionSize * portionNumber))
      }
    }
    return test
  }
  let [pages, changePortion] = useState<Array<number>>(changePortionPages())

  function changePage(page: number) {
    onPageCanged(page)
  }
  const test = () => {
    setPortionNumber(portionCount - 1)
  }
  const test1 = () => {
    setPortionNumber(0)
  }
  return (<>
    {isShowLeft && <> <img src={back} alt="back" className={style.btn} onClick={left} />
      <span
        className={style.item}
        onClick={() => test1()}
      > {1}</span>----
    </>
    }
    {pages.map(p =>
      <span key={p}
        className={currentPage === p ? style.select : style.item}
        onClick={() => changePage(p)}
      > {p}</span>
    )}
    {isShowRight && <>
      ----
      <span
        onClick={() => test()}
        className={currentPage === pagesCount ? style.select : style.item}

      > {pagesCount}</span>
      <img src={forward} alt="back" className={style.btn} onClick={right} />

    </>
    }
    {/* <input type="number" onBlur={changePage()} val /> */}
  </>)
}

export default Paginator;
