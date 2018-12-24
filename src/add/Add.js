import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './Add.less';
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

    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.add();
        }
    }

    render() {
        return (
            <div id={style.add}>
                <table>
                    <thead>
                        <tr>
                            <th><input id="brandInput" placeholder="Brand" onKeyUp={this.onKeyUp.bind(this)}/></th>
                            <th><input id="modelInput"  placeholder="Model" onKeyUp={this.onKeyUp.bind(this)} /></th>
                            <th><input id="powerInput"  placeholder="Power" onKeyUp={this.onKeyUp.bind(this)} /></th>
                            <th><input id="yearInput"  placeholder="Year" onKeyUp={this.onKeyUp.bind(this)} /></th>
                            <th><input id="priceInput"  placeholder="Price" onKeyUp={this.onKeyUp.bind(this)} /></th>
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