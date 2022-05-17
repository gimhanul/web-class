import React, { Component } from "react";

export default class R033_ReturnMap extends Component {
    render() {
        const elementArray = [
            <li>react</li>,
            <li>200</li>,
            <li>Array map</li>
        ];

        return (
            <ul>
                {elementArray.map(a => a)}
            </ul>
        )
    }
}