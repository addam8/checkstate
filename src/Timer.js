import { render } from "@testing-library/react";
import React from "react";


class Timer extends React.Component {
    constructor (){
    super ()
    this.state= {
        timer:0,
    }}


componentDidMount() {
    setInterval( ()=> this.setState({timer: this.state.timer +1}),1000)}
    render() {
        return(
            <div>
                <p>{this.state.timer}</p>
            </div>
        )
    }}
export default Timer;