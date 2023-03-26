import React, {Component} from "react";
import './App.css'
//functional component ==> useState Hook
//class component ==> this.state

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: "Welcome all"
        }
    }

    changeMessage(){
        this.setState({
            message: "Thank you for your Time"
        })
    }

    render(){
        return(<div id = "div2">
            <h3>--Using States--</h3>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>click me</button>
        </div>);

    }
}

export default Message