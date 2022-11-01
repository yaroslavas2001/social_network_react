import React from "react";


class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  changeStatus = (e) => {
    // console.log("e", e.currentTarget.value)
    this.setState({
      status: e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
   
    if(prevProps.status!==this.props.status){
      this.setState({
        status: this.props.status
      })
    }
    console.log("componentDidUpdate")
    //если вызвать setState то компонент зациклится
    //если все таки нужно, то обязательно исппользовать условие
  }
  activateEditMode = () => {
    console.log("before setState", this.state.editMode)
    this.setState({
      editMode: true
    })
    console.log("after setState", this.state.editMode)
    // setState ассинхронный, поэтому оба console.log покажут false
    //setState - штука из React.Component которая меняет локальный стейт и перерисовывает ui
    // this.state.editMode=true
  }
  deActivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  render() {
    return (<div>
      {!this.state.editMode &&
        <div onDoubleClick={this.activateEditMode}>{
          this.props.status || "---"}</div>
      }
      {this.state.editMode &&
        <div>
          <input type="text" value={this.state.status}
            autoFocus={true}
            onBlur={this.deActivateEditMode}
            onChange={this.changeStatus} />
        </div>
      }

    </div>)
  }
}


export default ProfileStatus
