import React, {Component} from 'react';
import './Add.css';

export default class Add extends Component {
    
    render() {
        return (
            <div id="add">
                <table>
                    <thead>
                        <tr>
                            <th><input placeholder="Brand" /></th>
                            <th><input placeholder="Model" /></th>
                            <th><input placeholder="Power" /></th>
                            <th><input placeholder="Year" /></th>
                            <th><input placeholder="Price" /></th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}