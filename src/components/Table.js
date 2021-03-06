import React, {Component} from 'react';
import '../styles/css/Table.css';
import sortIcon from '../images/sort.png';
import subtractIcon from '../images/subtract.png';
import {connect} from 'react-redux';
import axios from 'axios';

export class Table extends Component {

    componentWillMount() {
        let that = this;
        axios.get('get')
            .then(function(response){
                that.props.updateCars(response.data);
            });
    }

    sort(pickedSortEntity) {
        let storedSortEntity = localStorage.getItem("sort");
        if (pickedSortEntity === "brand") {
            if (storedSortEntity === "brand asc") {
                localStorage.setItem("sort", "brand desc");
            } else {
                localStorage.setItem("sort", "brand asc");
            }
        } else if (pickedSortEntity === "model") {
            if (storedSortEntity === "model asc") {
                localStorage.setItem("sort", "model desc");
            } else {
                localStorage.setItem("sort", "model asc");
            }
        } else if (pickedSortEntity === "power") {
            if (storedSortEntity === "power asc") {
                localStorage.setItem("sort", "power desc");
            } else {
                localStorage.setItem("sort", "power asc");
            }
        } else if (pickedSortEntity === "year") {
            if (storedSortEntity === "year asc") {
                localStorage.setItem("sort", "year desc");
            } else {
                localStorage.setItem("sort", "year asc");
            }
        } else if (pickedSortEntity === "price") {
            if (storedSortEntity === "price asc") {
                localStorage.setItem("sort", "price desc");
            } else {
                localStorage.setItem("sort", "price asc");
            }
        }
        let that = this;
        axios.get('get')
            .then(function(response){
                that.props.updateCars(response.data);
            });
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

    onChange(property, id, check) {
        const element = document.getElementById(property + id);
        let value;
        if (check(element.value)) {
            value = element.value;
        } else {
            value = element.defaultValue;
        }

        element.value = value;
        if (value.length > 0) {
            axios.put("update", {}, {
                headers: {id, property, value}
            });
        } else if (isNaN(element.defaultValue)){
            element.placeholder = "Provide content";
        } else if (!isNaN(element.defaultValue)){
            element.placeholder = "Provide number";
        }
        
        let that = this;
        axios.get('get')
            .then(function(response){
                that.props.updateCars(response.data);
            });
    }

    checkIfNumber(value) {
        return /^[0-9]*$/.test(value);
    }

    checkIfNotNumber(value) {
        return /^[a-zA-Z]*$/.test(value);
    }
    
    render() {
        let that = this;
        const cars = this.props.cars.map(function(car) {
            return (
                <tr key={car.id}>
                    <td><input id={"brand" + car.id} defaultValue={car.brand} onChange={that.onChange.bind(that, "brand", car.id, that.checkIfNotNumber.bind(that))} /></td>
                    <td><input id={"model" + car.id} defaultValue={car.model} onChange={that.onChange.bind(that, "model", car.id, that.checkIfNotNumber.bind(that))} /></td>
                    <td><input id={"power" + car.id} defaultValue={car.power} onChange={that.onChange.bind(that, "power", car.id, that.checkIfNumber.bind(that))} /></td>
                    <td><input id={"year" + car.id} defaultValue={car.year} onChange={that.onChange.bind(that, "year", car.id, that.checkIfNumber.bind(that))} /></td>
                    <td><input id={"price" + car.id} defaultValue={car.price} onChange={that.onChange.bind(that, "price", car.id, that.checkIfNumber.bind(that))} /></td>
                    <td><img className="removeCar" src={subtractIcon} alt="removeCar" onClick={that.remove.bind(that, car.id)} /></td>
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