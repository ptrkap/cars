import React, {Component} from 'react';
import './Table.css';
import sortIcon from './sort.png';

export default class Table extends Component {

    sort(entity) {
        console.log(entity);
    }

    remove(i) {
        console.log(i);
    } 
    
    render() {
        return (
            <table id="carsTable">
                <thead>
                    <tr>
                        <th><div className="head">Brand</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "brand")} /></th>
                        <th><div className="head">Model</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "model")} /></th>
                        <th><div className="head">Power</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "power")} /></th>
                        <th><div className="head">Year</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "year")} /></th>
                        <th><div className="head">Price</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "price")} /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input value="brand1" /></td>
                        <td><input value="model1" /></td>
                        <td><input value="power1" /></td>
                        <td><input value="year1" /></td>
                        <td><input value="price1" /></td>
                        <td><img className="removeCar" src={require('./subtract.png')} alt="removeCar" onClick={this.remove.bind(this, 0)} /></td>
                    </tr>
                    <tr>
                        <td><input value="brand2" /></td>
                        <td><input value="model2" /></td>
                        <td><input value="power2" /></td>
                        <td><input value="year2" /></td>
                        <td><input value="price2" /></td>
                        <td><img className="removeCar" src={require('./subtract.png')} alt="removeCar" onClick={this.remove.bind(this, 1)} /></td>
                    </tr>
                    <tr>
                        <td><input value="brand3" /></td>
                        <td><input value="model3" /></td>
                        <td><input value="power3" /></td>
                        <td><input value="year3" /></td>
                        <td><input value="price3" /></td>
                        <td><img className="removeCar" src={require('./subtract.png')} alt="removeCar" onClick={this.remove.bind(this, 2)} /></td>
                    </tr>
                </tbody>
            </table>
        
        );
    }
}