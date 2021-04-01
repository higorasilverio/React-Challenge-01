import React from "react";

export default (props) => {
    const randomNumber = Math.random() * (props.max - props.min) + props.min
    return (
        <div style={{ marginLeft: 50 }}>
            <h2>Random Number Challenge:</h2>
            <p>Minimum value: <strong>{ props.min }</strong></p>
            <p>Maximum value: <strong>{ props.max }</strong></p>
            <p>Value generated: <strong>{ Math.round(randomNumber) }</strong></p>
            <h4>Refresh this page to generate another random number!</h4>
        </div>
        
    )
}
