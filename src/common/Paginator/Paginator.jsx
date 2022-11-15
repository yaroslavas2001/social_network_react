import { useState } from "react"
import style from "./Paginator.module.css"

const Paginator = ({ totalItemsCount, pageSize, onPageCanged, currentPage, portionSize = 10 }) => {
  // сколько страниц видит пользователь для переключения
  // let portionSize = 1000
  // колличество страниц в общем
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  // количество порций этих страничек
  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(0)
  let pages = []
  for (let i = 1; i <= portionSize; i++) {
    let passedItems = (i + (portionSize * portionNumber)) * pageSize
    let isAllShown = (passedItems - totalItemsCount) < pageSize
    if (isAllShown)
      pages.push(i + (portionSize * portionNumber))
  }

  let isShowLeft = portionNumber !== 0
  let isShowRight = portionCount !== portionNumber + 1

  const right = () => {
    setPortionNumber(portionNumber + 1)
  }
  const left = () => {
    setPortionNumber(portionNumber - 1)
  }
  return <div>
    {isShowLeft && <button onClick={left}>назад</button>}
    {pages.map(p =>
      <span key={p} className={currentPage === p ? style.select : style.item}
        onClick={() => onPageCanged(p)}> {p}</span>
    )}
    {isShowRight && <button onClick={right}>вперед</button>}
  </div>
}

export default Paginator;
