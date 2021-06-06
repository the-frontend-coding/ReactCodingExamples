import React, { Component } from 'react'
import ReactPropsExampleChildapp  from './ReactPropsExampleChildapp'

//Parent Component
export default class ReactPropsExampleParentapp extends Component {
    render() {
        return (
            <div>
                <p>Parent Component</p>

                {/* we have passed a prop "text" from the parent to the child.  */}
                <ReactPropsExampleChildapp text={"1st value"}/>
                <ReactPropsExampleChildapp text={"2nd value"}/>
            </div>
        )
    }
}
