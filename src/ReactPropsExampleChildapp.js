import React, { Component } from 'react'

//Child component
export default class ReactPropsExampleChildapp extends Component {
    render() {
        return (
            <div>
                <p>Child Component</p>
            {/* prop "text" in Child component to which values will be passed 
            from Parent component */}
                <p>{this.props.text}</p>
            </div>
        )
    }
}
