import Sorter from './table/Sorter';

export default function(state = [], action) {
  switch(action.type) {
    case "UPDATE_CARS":
      let cars = [...action.cars];
      Sorter.sortCars(cars);
      return cars;
    default:
      return state;
  }
}
