import Sorter from "../utils/Sorter";

describe('Sorter', () => {

  let cars;

  beforeEach(() => {
    cars = [{
      id: 1,
      brand: "Mazda",
      model: "RX8",
      power: 231,
      year: 2005,
      price: 23000
    },{
      id: 2,
      brand: "Opel",
      model: "Corsa",
      power: 45,
      year: 1994,
      price: 2000
    },{
      id: 3,
      brand: "Mercedes",
      model: "A168",
      power: 101,
      year: 2000,
      price: 5000
    }];
  });

  test('should sort by brand asc (this is default)', () => {
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(1);
    expect(cars[1].id).toBe(3);
    expect(cars[2].id).toBe(2);
  });

  test('should sort by brand desc', () => {
    localStorage.setItem("sort", "brand desc");
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(2);
    expect(cars[1].id).toBe(3);
    expect(cars[2].id).toBe(1);
  });

  test('should sort by model asc', () => {
    localStorage.setItem("sort", "model asc");
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(3);
    expect(cars[1].id).toBe(2);
    expect(cars[2].id).toBe(1);
  });

  test('should sort by model desc', () => {
    localStorage.setItem("sort", "model desc");
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(1);
    expect(cars[1].id).toBe(2);
    expect(cars[2].id).toBe(3);
  });

  test('should sort by power asc', () => {
    localStorage.setItem("sort", "power asc");
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(2);
    expect(cars[1].id).toBe(3);
    expect(cars[2].id).toBe(1);
  });

  test('should sort by power desc', () => {
    localStorage.setItem("sort", "power desc");
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(1);
    expect(cars[1].id).toBe(3);
    expect(cars[2].id).toBe(2);
  });

  test('should sort by year asc', () => {
    localStorage.setItem("sort", "year asc");
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(2);
    expect(cars[1].id).toBe(3);
    expect(cars[2].id).toBe(1);
  });

  test('should sort by year desc', () => {
    localStorage.setItem("sort", "year desc");
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(1);
    expect(cars[1].id).toBe(3);
    expect(cars[2].id).toBe(2);
  });

  test('should sort by price asc', () => {
    localStorage.setItem("sort", "price asc");
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(2);
    expect(cars[1].id).toBe(3);
    expect(cars[2].id).toBe(1);
  });

  test('should sort by price desc', () => {
    localStorage.setItem("sort", "price desc");
    Sorter.sortCars(cars);
    expect(cars[0].id).toBe(1);
    expect(cars[1].id).toBe(3);
    expect(cars[2].id).toBe(2);
  });
});