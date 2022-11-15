import style from "./Paginator.module.css"

const PaginatorOld = ({ totalItemsCount, pageSize, onPageCanged, currentPage }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return <div>
    {pages.map(p =>
      <span key={p} className={currentPage === p ? style.select : style.item}
        onClick={() => onPageCanged(p)}> {p}</span>
    )}
  </div>
}

export default PaginatorOld;
