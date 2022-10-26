import React from "react";


class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }
  changeStatus() {

  }
  activateEditMode() {
    console.log("before setState", this.state.editMode)
    this.setState({
      editMode: true
    })
    console.log("after setState", this.state.editMode)
    // setState ассинхронный, поэтому оба console.log покажут false
    //setState - штука из React.Component которая меняет локальный стейт и перерисовывает ui
    // this.state.editMode=true
  }
  deActivateEditMode() {
    this.setState({
      editMode: false
    })

  }
  render() {
    return (<div>
      {!this.state.editMode &&
        <div onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</div>
      }
      {this.state.editMode &&
        <div>
          <input type="text" value={this.props.status}
            autoFocus={true}
            onBlur={this.deActivateEditMode.bind(this)}
            onChange={this.changeStatus} />
        </div>
      }

    </div>)
  }
}


export default ProfileStatus
