import React, { Component } from 'react'
import ReactWithoutPropsExamplChild from './ReactWithoutPropsExamplChild'

//Parent component
export default class ReactWithoutPropsExamplParent extends Component {
    render() {
        return (
            <div>
                <h3>We can try passing data from one component to other without using props but that will be static information passing. Hence we use props for dynamic data passing.</h3>
                {/* we have passed a value to "Greetings" 
                from the Parent to the Child but 
                it is not overwritten in Child component*/}
                <ReactWithoutPropsExamplChild Greetings="Hello Mandy"/>
                <hr/>
            </div>
        )
    }
}
