import React, { Component } from 'react'

export default class ReactArrowFunctnWithoutBind extends Component {

    state ={
        userName:"foo"
    }

    //This is arrow function function hence no need to bind 
    //it explicitly inside constructor 
    //"=()=>" arrow function syntax
    handleClick=()=>{
        console.log(this.state.userName);
        alert("The userName is " + this.state.userName);
    }

    render() {
        return (
            <div>
                <h3>Arrow Function used for event handler hence no need to use Bind</h3>
               <button onClick={this.handleClick}>Click Me</button> 
               <hr/>
            </div>
        )
    }
}
