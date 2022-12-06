import loading from "./../../assets/Loading.gif"
import React, { FC } from "react"
type propsType = {
    isFetching: boolean
}
const Preloader: FC<propsType> = ({ isFetching }) => {
    return (
        <>
            {isFetching ? <img src={loading} role={'main'} alt="preloader" /> : null}
        </>
    )
}
export default Preloader