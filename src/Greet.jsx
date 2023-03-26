import React from "react";
import './App.css'
//functional component ==> props.attribute
//class component ==> this.props.attribute

const Greet = (props) => {
    console.log(props)
    return (
    <div className= "div1">
        <h2> Hey, {props.fname} {props.lname}</h2>
        {props.children}
    </div>
    );
}
export default Greet