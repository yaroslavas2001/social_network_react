import loading from "./../../style/Loading.gif"

let Preloader = (props) => {
    return (<div>
        {props.isFetching ? <img src={loading} /> : null}
    </div>)
}
export default Preloader