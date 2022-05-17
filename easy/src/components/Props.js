import React, { Component } from 'react';

export default class R017_Props extends Component {
    render() {
        let props_value = this.props.props_val;
        props_value += ' from App.js';
        return (
            <div>{props_value}</div>
        )
    }
}