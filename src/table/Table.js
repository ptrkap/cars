import React, {Component} from 'react';
import './Table.css';
import sortIcon from './sort.png';
import {connect} from 'react-redux';
import axios from 'axios';

class Table extends Component {

    componentWillMount() {
        let that = this;
        axios.get('get')
            .then(function(response){
                that.props.updateCars(response.data);
            });
    }

    sort(entity) {
        console.log(entity);
    }

    remove(id) {
        let that = this;
        axios.delete('remove', {headers: {id}})
            .then(function() {
                axios.get('get')
                    .then(function(response){
                        that.props.updateCars(response.data);
                    });
            });
    } 
    
    render() {
        let that = this;
        const cars = this.props.cars.map(function(car) {
            return (
                <tr>
                    <td><input value={car.brand} /></td>
                    <td><input value={car.model} /></td>
                    <td><input value={car.power} /></td>
                    <td><input value={car.year} /></td>
                    <td><input value={car.price} /></td>
                    <td><img className="removeCar" src={require('./subtract.png')} alt="removeCar" onClick={that.remove.bind(that, car.id)} /></td>
                </tr>
            );
        });

        return (
            <table id="carsTable">
                <thead>
                    <tr>
                        <th><div className="head">Brand</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "brand")} /></th>
                        <th><div className="head">Model</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "model")} /></th>
                        <th><div className="head">Power</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "power")} /></th>
                        <th><div className="head">Year</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "year")} /></th>
                        <th><div className="head">Price</div><img className="sort" src={sortIcon} alt="sort" onClick={this.sort.bind(this, "price")} /></th>
                        <th id="emptyBox"></th>
                    </tr>
                </thead>
                <tbody>
                    {cars}
                </tbody>
            </table>
        
        );
    }
}

function mapStateToProps(state) {
    return {
        cars: state
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

export default connect(mapStateToProps, mapDispatchToProps)(Table);