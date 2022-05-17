import React, { Component } from 'react';

export default class R019_PropsDatatype extends Component {
    render() {
        let {
            BooleanTrueFalse
        } = this.props;
        return (
            <div style={{padding: "0px"}}>
                {BooleanTrueFalse ? '2. ' : '1. '}
                {BooleanTrueFalse.toString()}
            </div>
        )
    }
}