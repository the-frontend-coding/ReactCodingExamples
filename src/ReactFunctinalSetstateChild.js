import React, { Component } from 'react'

//Class child component
export default class ReactFunctinalSetstateChild extends Component {

    //state object counter
    state={
        counter:0
    }

    //event handler for button
    handleClick=()=>{
        //functional setState that accepts previous state and 
        //props as arguments ("prevState" is just variable name
        // used here we can give any suitable name)
        this.setState((prevState,props)=>({
            counter:prevState.counter+props.increment
        }))
    }

    render() {
        return (
            <div>
                <h3>Simple example for Functional setState() that accepts Previous State and Props as arguments.</h3>
                <h5>{this.state.counter}</h5>
                <button onClick={this.handleClick}>Click Me to increment</button>
            </div>
        )
    }
}
