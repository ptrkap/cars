export default function(state = [], action) {
  switch(action.type) {
    case "UPDATE_CARS":
      return action.cars;
    default:
      return state;
  }
}