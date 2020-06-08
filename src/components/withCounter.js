import React from 'react'

const withCounter=(WrappedComponent,increamentNumber)=>{
    class withCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        increamentCount=()=>{
            this.setState(prevState=>{
                return { count:prevState.count+increamentNumber}
            })
        } 
        render(){
            return <WrappedComponent 
            count={this.state.count} 
            increamentCount={this.increamentCount}
            {... this.props}
            />
        }
    }
    return withCounter
}
export default withCounter