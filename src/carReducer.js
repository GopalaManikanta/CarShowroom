export function carReducer(state, action) {
  switch (action.type) {

    case "ADD_CAR":
      return [...state, action.carsData];

    case "REMOVE_CAR":
      return state.filter(
        (car) => car.id !== action.carsData
      );

    case "CLEAR_WISHLIST":
      return [];

    default:
      return state;
  }
}