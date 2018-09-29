import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 }) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ setTo }) => ({
  type: "SET",
  setTo
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return { count: state.count + incrementBy };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return { count: state.count - decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      const setTo =
        typeof action.setTo === "number" ? action.setTo : state.count;
      return { count: setTo };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

// Actions = an object that gets sent to the store.

//I'd like to increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 2 }));

//I'd like to decrement the count
