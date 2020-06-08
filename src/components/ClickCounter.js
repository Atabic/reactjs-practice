import React, { Component } from 'react'
import withCounter from "./withCounter";

class ClickCounter extends Component {
    render() {
        const {count, increamentCount}= this.props
        return (
            <div>
                <button onClick={increamentCount}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter( ClickCounter,5)
