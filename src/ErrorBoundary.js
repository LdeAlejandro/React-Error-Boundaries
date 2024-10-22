import React, {Component} from 'react';
import ErrorImg from './error.webp'

class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

componentDidCatch(error, info){
    console.log('Error: ', error, 'Info:' , info)
    //sendToService(data)
    this.setState({
        hasError: true
    })
}

    render(){
        if(this.state.hasError){
            return <img src={ErrorImg} alt="Error" /> 
        }
        return this.props.children
    }
}

export default ErrorBoundary