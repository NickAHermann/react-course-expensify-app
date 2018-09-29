import expensesReducer from "../../reducers/expenses";
import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 10000,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "credit card",
    note: "",
    amount: 4444,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

test("should set the default to an empty array", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add an expense to the state", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: expenses[0]
  };
  const state = expensesReducer(undefined, action);
  expect(state[0]).toEqual(expenses[0]);
});

test("should remove an expense from the state", () => {
  const currentState = expenses;
  const action = {
    type: "REMOVE_EXPENSE",
    id: "2"
  };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should edit an expense from the state", () => {
  const currentState = expenses;
  const action = {
    type: "EDIT_EXPENSE",
    id: "2",
    updates: {
      description: "Fill up tank"
    }
  };
  const state = expensesReducer(currentState, action);
  expect(state[1]).toEqual({
    id: "2",
    description: "Fill up tank",
    note: "",
    amount: 10000,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  });
});
