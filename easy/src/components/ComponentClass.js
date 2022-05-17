import React, { Component } from "react";

export default class R027_ComponentClass extends Component {
    constructor (props) {
        super(props);
        this.state = {
            StateString: 'react',
            StaetArrayObj: ['react', {react: '200'}]
        }
    }

    buttonClick = type => {
        if (type === 'String') {
            this.setState({StateString: '리액틍'});
        } else {
            this.setState({StaetArrayObj: ['뤼액틍', { react: '30000' }]});
        }
    }

    render() {
        console.log('render() 실행');
        return (
            <div>
                <button onClick={e => this.buttonClick('String')}>
                    문자열 변경
                </button>
                <button onClick={e => this.buttonClick('ArrayObject')}>
                    객체 배열 변경
                </button>
            </div>
        )
    }
}