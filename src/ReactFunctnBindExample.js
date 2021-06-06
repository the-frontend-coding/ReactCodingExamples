import React, { Component } from 'react'

//Class Component
export default class ReactFunctnBindExample extends Component {

    //constructor
constructor(props){
    super(props);

    //pointing to the state of "App" context
    this.state ={
        userName:"foo"
    }
    //If we don't bind this function then we will get error as undefined
    this.handleClick=this.handleClick.bind(this);
}

handleClick(){
    //If we don't bind using "this" we will get error as 
    //cannot read the property userName of undefined
    console.log(this.state.userName);
    alert("The userName is " + this.state.userName);
}

    render() {
        return (
            <div>
                <h3>Using "Bind" for the normal Function</h3>
                <button onClick={this.handleClick}>Click Me</button>
                <hr/>
            </div>
        )
    }
}
