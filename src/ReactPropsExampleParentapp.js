import React, { Component } from 'react'
import ReactPropsExampleChildapp  from './ReactPropsExampleChildapp'

//Parent Component
export default class ReactPropsExampleParentapp extends Component {
    render() {
        return (
            <div>
                <h3>React Props Example</h3>
                <p>Parent Component</p>

                {/* we have passed a prop "text" from the parent to the child.  */}
                <ReactPropsExampleChildapp text={"1st value"}/>
                <ReactPropsExampleChildapp text={"2nd value"}/>
                <hr/>
            </div>
        )
    }
}
