import React, { Component } from "react";

export default class R025_SetState extends Component {
    constructor (props) {
        super(props);
        this.state = {
            StateString: "react",
        }
    }

    StateChange = flag => {
        if (flag === "direct") this.state.StateString = "리액틍";
        if (flag === "setstate") this.setState({StateString: "뤼액트"});
    }

    render() {
        return (
            <div style={{padding: "0px"}}>
                <button onClick={e => this.StateChange('direct', e)}>
                    state 직접 변경
                </button>
                <button onClick={e => this.StateChange('setstate', e)}>
                    setState로 변경
                </button> <br/>
                [state 변경하기] StateString: {this.state.StateString}
            </div>
        )
    }
}