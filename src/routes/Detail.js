import React from "react"

class Detail extends React.Component{
    componentDidMount(){
        const { location : {state}, history } = this.props;
        if(state === undefined){
            history.push("/")
        };
    }
    render(){
        const {location : {state}} = this.props;
        if(state){
            return (
                <h1>{state.title}</h1>
            )
        }
        else {
            return null
        }
        
    }
    
}

export default Detail