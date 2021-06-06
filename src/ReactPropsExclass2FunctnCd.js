import React from 'react'

//Functional Child component
export default function ReactPropsExclass2FunctnCd(props) {
    return (
        <div>
            {/* prop "greetings, quote, proverb" in Child
            component to which values will be passed 
            from Parent component */}
            <h1>{props.greetings}</h1>
            <h2>{props.quote}</h2>
            <h3>{props.proverb}</h3>
        </div>
    )
}
