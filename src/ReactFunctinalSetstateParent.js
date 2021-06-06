import React, { Component } from 'react'
import ReactFunctinalSetstateChild from './ReactFunctinalSetstateChild'

export default class ReactFunctinalSetstateParent extends Component {
    render() {
        return (
            <div>
               <ReactFunctinalSetstateChild increment={5}/>
               <hr/> 
            </div>
        )
    }
}
