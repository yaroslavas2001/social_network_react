import React, { FC, useCallback, useState } from "react"
import style from "./Paginator.module.css"
import back from "./../../assets/back.png"
import forward from "./../../assets/forward.png"
import { useEffect } from "react";
import { join } from "../../utils/function";

type propsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  portionSize?: number
  currentPortion: number
  search: string
  isDarkTheme: boolean
  onPageCanged: (page: number, search: string) => void
  setCurrentPortion: (portion: number) => void
}
const Paginator: FC<propsType> = ({ search, totalItemsCount, isDarkTheme, pageSize, currentPage, currentPortion, onPageCanged, setCurrentPortion, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  // количество порций этих страничек
  let portionCount = Math.ceil(pagesCount / portionSize)
  // let [portionNumber, setPortionNumber] = useState<number>(currentPortion)

  let isShowLeft = currentPortion !== 0
  let isShowRight = portionCount !== currentPortion + 1
  const changePortionPages = (): Array<number> => {
    let test: Array<number> = []
    for (let i = 1; i <= portionSize; i++) {
      let pageNumber = i + (portionSize * currentPortion)
      let passedItems = pageNumber * pageSize
      let isAllShown = (passedItems - totalItemsCount) < pageSize
      if (isAllShown) {
        test.push(pageNumber)
      }
    }
    return test
  }
  let [isShowPagination, changeIsShowPagination] = useState<boolean>(true)

  let [pages, changePortion] = useState<Array<number>>(changePortionPages())
  useEffect(() => {
    // выполняется после отрисовки
    changePortion(changePortionPages())
    if (totalItemsCount == 0) {
      changeIsShowPagination(false)
    }
  }, [currentPortion])
  const goRight = useCallback(() => {
    setCurrentPortion(currentPortion + 1)
    // setTodos((t) => [...t, "New Todo"]);
  }, [currentPortion]);
  // const right = () => {
  //   setCurrentPortion(currentPortion + 1)
  // }
  const left = () => {
    setCurrentPortion(currentPortion - 1)
  }


  const changePage = (page: number) => () => {
    onPageCanged(page, search)
  }
  const toFinish = () => {
    setCurrentPortion(portionCount - 1)
    onPageCanged(pagesCount, search)
  }
  const toStart = () => {
    setCurrentPortion(0)
    onPageCanged(1, search)
  }
  const isCurrentPage = (curentPage: number, anyPage: number): string => {
    if (!isDarkTheme)
    return curentPage === anyPage ? style.select : style.item
    else  return curentPage === anyPage ? style.select_dark : style.item_dark
  }
  return (
    isShowPagination ?
      <div className={style.paginator}>
        {isShowLeft && <> <img src={back} alt="back" className={style.btn} onClick={left} />
          <div className={join([isCurrentPage(currentPage, 1), style.base, style.left])}
            onClick={toStart}
          > 1</div>
        </>
        }
        {pages.map(p =>
          <div key={p}
            className={join([isCurrentPage(currentPage, p), style.base])}
            onClick={changePage(p)}
          > {p}</div>
        )}
        {isShowRight && <>
          <div className={join([isCurrentPage(currentPage, pagesCount), style.base, style.right])}
            onClick={toFinish}
          > {pagesCount}</div>
          <img src={forward} alt="back" className={style.btn} onClick={goRight} />
        </>
        }
        {/* <input type="number" onBlur={changePage()} val /> */}
      </div> : <></>)
}

export default Paginator;
