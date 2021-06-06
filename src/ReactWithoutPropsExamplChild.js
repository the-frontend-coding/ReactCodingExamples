import React, { Component } from 'react'

//Child component
export default class ReactWithoutPropsExamplChild extends Component {
    
    render() {
        let Greetings = "Hello Sandy";
        return (
            <div>
                <h1>{Greetings}</h1>
            </div>
        )
    }
}
