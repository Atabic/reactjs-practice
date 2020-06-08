import React, { Component } from 'react'

export class ClassClick extends Component {
    buttonClicked(){
        console.log('Button is Clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.buttonClicked}>Click Class Component Button</button>
            </div>
        )
    }
}

export default ClassClick
