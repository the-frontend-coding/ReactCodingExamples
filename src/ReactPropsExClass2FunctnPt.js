import React, { Component } from 'react'
import ReactPropsExclass2FunctnCd from './ReactPropsExclass2FunctnCd'

//Class Parent Component
export default class ReactPropsExClass2FunctnPt extends Component {
    render() {
        return (
            <div>
                <h3>Passing data from Class component(Parent) to Functional component (Child) using props.</h3>
                <ReactPropsExclass2FunctnCd greetings={"Hello Sandy"} quote={"Morning quote"} proverb={"evening proverb"} />
                <hr/>
            </div>
        )
    }
}

