import React from "react";

export default (props) => {
    const { min, max } = props
    const randomNumber = Math.random() * (max - min) + min
    return (
        <div style={{ marginLeft: 50 }}>
            <h2>Random Number Challenge:</h2>
            <p>Minimum value: <strong>{ min }</strong></p>
            <p>Maximum value: <strong>{ max }</strong></p>
            <p>Value generated: <strong>{ Math.round(randomNumber) }</strong></p>
            <h4>Refresh this page to generate another random number!</h4>
        </div>
        
    )
}
