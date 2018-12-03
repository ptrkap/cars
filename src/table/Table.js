import React, {Component} from 'react';
import './Table.css';

export default class Table extends Component {

    render() {
        return (
            <table id="carsTable">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Power</th>
                        <th>Year</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input value="brand1" /></td>
                        <td><input value="model1" /></td>
                        <td><input value="power1" /></td>
                        <td><input value="year1" /></td>
                        <td><input value="price1" /></td>
                    </tr>
                    <tr>
                        <td><input value="brand2" /></td>
                        <td><input value="model2" /></td>
                        <td><input value="power2" /></td>
                        <td><input value="year2" /></td>
                        <td><input value="price2" /></td>
                    </tr>
                    <tr>
                        <td><input value="brand3" /></td>
                        <td><input value="model3" /></td>
                        <td><input value="power3" /></td>
                        <td><input value="year3" /></td>
                        <td><input value="price3" /></td>
                    </tr>
                </tbody>
            </table>
        
        );
    }
}