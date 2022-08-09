import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    render () {
        return (
            <div>
                Counter: {this.state.counter}
            </div>
        )
    }
}