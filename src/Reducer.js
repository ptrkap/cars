import Sorter from './utils/Sorter';

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
