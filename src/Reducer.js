export default function(state = [], action) {
  switch(action.type) {
    case "UPDATE_CARS":
      let sort = localStorage.getItem("sort");
      if (sort === null) {
        localStorage.setItem("sort", "brand asc");
      }
      let cars = [...action.cars];
      sortByRules(cars);
      return cars;
    default:
      return state;
  }
}

function sortByRules(cars) {
  cars.sort((a, b) => {
    return compareBrandAsc(a, b, 
      compareModelAsc(a, b, 
        comparePowerAsc(a, b, 
          compareYearAsc(a, b, 
            comparePriceAsc(a, b,
              stub())))));
  });
}

function compareBrandAsc(a, b, externalFunctionResult) {
  if (a.brand > b.brand) {
    return 1;
  } else if (a.brand < b.brand) {
    return -1;
  } else {
    return externalFunctionResult;
  }
}

function compareModelAsc(a, b, externalFunctionResult) {
  if (a.model > b.model) {
    return 1;
  } else if (a.model < b.model) {
    return -1;
  } else {
    return externalFunctionResult;
  }
}

function comparePowerAsc(a, b, externalFunctionResult) {
  if (a.power > b.power) {
    return 1;
  } else if (a.power < b.power) {
    return -1;
  } else {
    return externalFunctionResult;
  }
}

function compareYearAsc(a, b, externalFunctionResult) {
  if (a.year > b.year) {
    return 1;
  } else if (a.year < b.year) {
    return -1;
  } else {
    return externalFunctionResult;
  }
}

function comparePriceAsc(a, b, externalFunctionResult) {
  if (a.price > b.price) {
    return 1;
  } else if (a.price < b.price) {
    return -1;
  } else {
    return externalFunctionResult;
  }
}

function stub() {
  return 0;
}