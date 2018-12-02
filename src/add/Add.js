import React, {Component} from 'react';
import './Add.css';

export default class Add extends Component {
    
    render() {
        return (
            <div id="adder">
                <input placeholder="Brand" />
                <input placeholder="Model" />
                <input placeholder="Power" />
                <input placeholder="Year" />
                <input placeholder="Price" />
            </div>
        );
    }
}