import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Add.css';
import axios from 'axios';

class Add extends Component {
    
    add() {
        const brand = document.getElementById("brandInput").value;
        const model = document.getElementById("modelInput").value;
        const power = Number(document.getElementById("powerInput").value);
        const year = Number(document.getElementById("yearInput").value);
        const price = Number(document.getElementById("priceInput").value);
        const car = {
            id: -1,
            brand,
            model,
            power,
            year,
            price
        }
        let that = this;
        axios.post('add', car)
            .then(function() {
                axios.get('get')
                    .then(function(response){
                        that.props.updateCars(response.data);
                    });
            });
    }

    render() {
        return (
            <div id="add">
                <table>
                    <thead>
                        <tr>
                            <th><input id="brandInput" placeholder="Brand" /></th>
                            <th><input id="modelInput"  placeholder="Model" /></th>
                            <th><input id="powerInput"  placeholder="Power" /></th>
                            <th><input id="yearInput"  placeholder="Year" /></th>
                            <th><input id="priceInput"  placeholder="Price" /></th>
                            <th><img className="removeCar" src={require('./add.png')} alt="removeCar" onClick={this.add.bind(this)}/></th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCars: function(cars) {
            return dispatch({
                type: "UPDATE_CARS",
                cars: cars
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(Add);