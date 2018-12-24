export default class Sorter {

  static sortCars(cars) {
    let sort = localStorage.getItem("sort");
    if (sort === null) {
      localStorage.setItem("sort", "brand asc");
    }
    switch(localStorage.getItem("sort")){
      case "brand asc":
        Sorter.sortByBrandAsc(cars);
        break;
      case "brand desc":
        Sorter.sortByBrandDesc(cars);
        break;
      case "model asc":
        Sorter.sortByModelAsc(cars);
        break;
      case "model desc":
        Sorter.sortByModelDesc(cars);
        break;
      case "power asc":
        Sorter.sortByPowerAsc(cars);
        break;
      case "power desc":
        Sorter.sortByPowerDesc(cars);
        break;
      case "year asc":
        Sorter.sortByYearAsc(cars);
        break;
      case "year desc":
        Sorter.sortByYearDesc(cars);
        break;
      case "price asc":
        Sorter.sortByPriceAsc(cars);
        break;
      case "price desc":
        Sorter.sortByPriceDesc(cars);
        break;
      default:
    }
  }

  static sortByBrandAsc(cars) {
    cars.sort((a, b) => {
      return Sorter.compareBrandAsc(a, b, 
        Sorter.compareModelAsc(a, b, 
          Sorter.comparePowerAsc(a, b, 
            Sorter.compareYearAsc(a, b, 
              Sorter.comparePriceAsc(a, b,
                Sorter.stub())))));
    });
  }
  
  static sortByBrandDesc(cars) {
    cars.sort((a, b) => {
      return Sorter.compareBrandDesc(a, b, 
        Sorter.compareModelDesc(a, b, 
          Sorter.comparePowerDesc(a, b, 
            Sorter.compareYearDesc(a, b, 
              Sorter.comparePriceDesc(a, b,
                Sorter.stub())))));
    });
  }
  
  static sortByModelAsc(cars) {
    cars.sort((a, b) => {
      return Sorter.compareModelAsc(a, b, 
        Sorter.compareBrandAsc(a, b, 
          Sorter.comparePowerAsc(a, b, 
            Sorter.compareYearAsc(a, b, 
              Sorter.comparePriceAsc(a, b,
                Sorter.stub())))));
    });
  }
  
  static sortByModelDesc(cars) {
    cars.sort((a, b) => {
      return Sorter.compareModelDesc(a, b, 
        Sorter.compareBrandDesc(a, b, 
          Sorter.comparePowerDesc(a, b, 
            Sorter.compareYearDesc(a, b, 
              Sorter.comparePriceDesc(a, b,
                Sorter.stub())))));
    });
  }
  
  static sortByPowerAsc(cars) {
    cars.sort((a, b) => {
      return Sorter.comparePowerAsc(a, b, 
        Sorter.compareBrandAsc(a, b, 
          Sorter.compareModelAsc(a, b, 
            Sorter.compareYearAsc(a, b, 
              Sorter.comparePriceAsc(a, b,
                Sorter.stub())))));
    });
  }
  
  static sortByPowerDesc(cars) {
    cars.sort((a, b) => {
      return Sorter.comparePowerDesc(a, b, 
        Sorter.compareBrandDesc(a, b, 
          Sorter.compareModelDesc(a, b, 
            Sorter.compareYearDesc(a, b, 
              Sorter.comparePriceDesc(a, b,
                Sorter.stub())))));
    });
  }
  
  static sortByYearAsc(cars) {
    cars.sort((a, b) => {
      return Sorter.compareYearAsc(a, b,
        Sorter.compareBrandAsc(a, b, 
          Sorter.compareModelAsc(a, b, 
            Sorter.comparePowerAsc(a, b, 
              Sorter.comparePriceAsc(a, b,
                Sorter.stub())))));
    });
  }
  
  static sortByYearDesc(cars) {
    cars.sort((a, b) => {
      return Sorter.compareYearDesc(a, b,
        Sorter.compareBrandDesc(a, b, 
          Sorter.compareModelDesc(a, b, 
            Sorter.comparePowerDesc(a, b, 
              Sorter.comparePriceDesc(a, b,
                Sorter.stub())))));
    });
  }
  
  static sortByPriceAsc(cars) {
    cars.sort((a, b) => {
      return Sorter.comparePriceAsc(a, b,
        Sorter.compareBrandAsc(a, b, 
          Sorter.compareModelAsc(a, b, 
            Sorter.comparePowerAsc(a, b, 
              Sorter.compareYearAsc(a, b, 
                Sorter.stub())))));
    });
  }
  
  static sortByPriceDesc(cars) {
    cars.sort((a, b) => {
      return Sorter.comparePriceDesc(a, b,
        Sorter.compareBrandDesc(a, b, 
          Sorter.compareModelDesc(a, b, 
            Sorter.comparePowerDesc(a, b, 
              Sorter.compareYearDesc(a, b, 
                Sorter.stub())))));
    });
  }
  
  static compareBrandAsc(a, b, externalFunctionResult) {
    if (a.brand > b.brand) {
      return 1;
    } else if (a.brand < b.brand) {
      return -1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static compareModelAsc(a, b, externalFunctionResult) {
    if (a.model > b.model) {
      return 1;
    } else if (a.model < b.model) {
      return -1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static comparePowerAsc(a, b, externalFunctionResult) {
    if (a.power > b.power) {
      return 1;
    } else if (a.power < b.power) {
      return -1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static compareYearAsc(a, b, externalFunctionResult) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static comparePriceAsc(a, b, externalFunctionResult) {
    if (a.price > b.price) {
      return 1;
    } else if (a.price < b.price) {
      return -1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static compareBrandDesc(a, b, externalFunctionResult) {
    if (a.brand > b.brand) {
      return -1;
    } else if (a.brand < b.brand) {
      return 1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static compareModelDesc(a, b, externalFunctionResult) {
    if (a.model > b.model) {
      return -1;
    } else if (a.model < b.model) {
      return 1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static comparePowerDesc(a, b, externalFunctionResult) {
    if (a.power > b.power) {
      return -1;
    } else if (a.power < b.power) {
      return 1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static compareYearDesc(a, b, externalFunctionResult) {
    if (a.year > b.year) {
      return -1;
    } else if (a.year < b.year) {
      return 1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static comparePriceDesc(a, b, externalFunctionResult) {
    if (a.price > b.price) {
      return -1;
    } else if (a.price < b.price) {
      return 1;
    } else {
      return externalFunctionResult;
    }
  }
  
  static stub() {
    return 0;
  }
}