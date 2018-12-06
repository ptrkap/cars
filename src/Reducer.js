export default function(state = [], action) {
  switch(action.type) {
    case "UPDATE_CARS":
      let sort = localStorage.getItem("sort");
      if (sort === null) {
        localStorage.setItem("sort", "brand asc");
      }
      let cars = [...action.cars];
      switch(localStorage.getItem("sort")){
        case "brand asc":
          sortByBrandAsc(cars);
          break;
        case "brand desc":
          sortByBrandDesc(cars);
          break;
        case "model asc":
          sortByModelAsc(cars);
          break;
        case "model desc":
          sortByModelDesc(cars);
          break;
        case "power asc":
          sortByPowerAsc(cars);
          break;
        case "power desc":
          sortByPowerDesc(cars);
          break;
        case "year asc":
          sortByYearAsc(cars);
          break;
        case "year desc":
          sortByYearDesc(cars);
          break;
        case "price asc":
          sortByPriceAsc(cars);
          break;
        case "price desc":
          sortByPriceDesc(cars);
          break;
      }
      return cars;
    default:
      return state;
  }
}

function sortByBrandAsc(cars) {
  cars.sort((a, b) => {
    return compareBrandAsc(a, b, 
      compareModelAsc(a, b, 
        comparePowerAsc(a, b, 
          compareYearAsc(a, b, 
            comparePriceAsc(a, b,
              stub())))));
  });
}

function sortByBrandDesc(cars) {
  cars.sort((a, b) => {
    return compareBrandDesc(a, b, 
      compareModelDesc(a, b, 
        comparePowerDesc(a, b, 
          compareYearDesc(a, b, 
            comparePriceDesc(a, b,
              stub())))));
  });
}

function sortByModelAsc(cars) {
  cars.sort((a, b) => {
    return compareModelAsc(a, b, 
      compareBrandAsc(a, b, 
        comparePowerAsc(a, b, 
          compareYearAsc(a, b, 
            comparePriceAsc(a, b,
              stub())))));
  });
}

function sortByModelDesc(cars) {
  cars.sort((a, b) => {
    return compareModelDesc(a, b, 
      compareBrandDesc(a, b, 
        comparePowerDesc(a, b, 
          compareYearDesc(a, b, 
            comparePriceDesc(a, b,
              stub())))));
  });
}

function sortByPowerAsc(cars) {
  cars.sort((a, b) => {
    return comparePowerAsc(a, b, 
      compareBrandAsc(a, b, 
        compareModelAsc(a, b, 
          compareYearAsc(a, b, 
            comparePriceAsc(a, b,
              stub())))));
  });
}

function sortByPowerDesc(cars) {
  cars.sort((a, b) => {
    return comparePowerDesc(a, b, 
      compareBrandDesc(a, b, 
        compareModelDesc(a, b, 
          compareYearDesc(a, b, 
            comparePriceDesc(a, b,
              stub())))));
  });
}

function sortByYearAsc(cars) {
  cars.sort((a, b) => {
    return compareYearAsc(a, b,
      compareBrandAsc(a, b, 
        compareModelAsc(a, b, 
          comparePowerAsc(a, b, 
            comparePriceAsc(a, b,
              stub())))));
  });
}

function sortByYearDesc(cars) {
  cars.sort((a, b) => {
    return compareYearDesc(a, b,
      compareBrandDesc(a, b, 
        compareModelDesc(a, b, 
          comparePowerDesc(a, b, 
            comparePriceDesc(a, b,
              stub())))));
  });
}

function sortByPriceAsc(cars) {
  cars.sort((a, b) => {
    return comparePriceAsc(a, b,
      compareBrandAsc(a, b, 
        compareModelAsc(a, b, 
          comparePowerAsc(a, b, 
            compareYearAsc(a, b, 
              stub())))));
  });
}

function sortByPriceDesc(cars) {
  cars.sort((a, b) => {
    return comparePriceDesc(a, b,
      compareBrandDesc(a, b, 
        compareModelDesc(a, b, 
          comparePowerDesc(a, b, 
            compareYearDesc(a, b, 
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

function compareBrandDesc(a, b, externalFunctionResult) {
  if (a.brand > b.brand) {
    return -1;
  } else if (a.brand < b.brand) {
    return 1;
  } else {
    return externalFunctionResult;
  }
}

function compareModelDesc(a, b, externalFunctionResult) {
  if (a.model > b.model) {
    return -1;
  } else if (a.model < b.model) {
    return 1;
  } else {
    return externalFunctionResult;
  }
}

function comparePowerDesc(a, b, externalFunctionResult) {
  if (a.power > b.power) {
    return -1;
  } else if (a.power < b.power) {
    return 1;
  } else {
    return externalFunctionResult;
  }
}

function compareYearDesc(a, b, externalFunctionResult) {
  if (a.year > b.year) {
    return -1;
  } else if (a.year < b.year) {
    return 1;
  } else {
    return externalFunctionResult;
  }
}

function comparePriceDesc(a, b, externalFunctionResult) {
  if (a.price > b.price) {
    return -1;
  } else if (a.price < b.price) {
    return 1;
  } else {
    return externalFunctionResult;
  }
}

function stub() {
  return 0;
}