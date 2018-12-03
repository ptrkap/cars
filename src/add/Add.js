import React, {Component} from 'react';
import './Add.css';

export default class Add extends Component {
    
    add() {
        console.log("add");
    }

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
                            <th><img className="removeCar" src={require('./add.png')} alt="removeCar" onClick={this.add.bind(this)}/></th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}