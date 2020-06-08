import React, { Component } from 'react'
import withCounter from "./withCounter";


class HoverCounter extends Component {
    render() {
        const {count,increamentCount}=this.props
        return  <h2 onMouseOver={increamentCount}> Hovered {count} times</h2>
    }
}

export default withCounter( HoverCounter,10)
