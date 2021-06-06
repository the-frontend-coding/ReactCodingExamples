import React, { Component } from 'react'
import ReactConditnalRenderingCd from './ReactConditnalRenderingCd'

//Parent component
export default class ReactConditnalRenderingPt extends Component {

    state = {
        isShow: false
      }

      //event handler for the button, here we are changing state object
      //"isShow" value
      changeState = () => {
        this.setState({ isShow: !this.state.isShow });
      }

    render() {
        return (
            <div>
                <h3>Passing data from Class component(Parent) to Arrow Functional component (Child) using props but with conditional rendering.</h3>
                {/* Conditional rendering of the child component "Childapp"
                based on the state object "isShow" value */}
                {this.state.isShow ? <ReactConditnalRenderingCd greeting={"You have clicked me"} /> : null}
                <button onClick={this.changeState}>Click me</button>
                <hr/>
            </div>
        )
    }
}
