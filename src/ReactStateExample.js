import React, { Component } from 'react'

export default class ReactStateExample extends Component {

    //State declaration
  state={
    userName:"Peter",
    userPlace:"Newyork"
  }
    render() {
        return (
            <div>
                {/* accessing state object value using "this" pointer */}
                {this.state.userName},{this.state.userPlace}
            </div>
        )
    }
}
