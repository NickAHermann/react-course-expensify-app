import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD expenses
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE Expenses
const removeExpense = id => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT expense
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//set Text filter
const setTextFilter = (text = "") => ({
  type: "SET_FILTER",
  text
});

// sort by amount
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// sort by date
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// set start date
const setStartDate = (date = undefined) => ({
  type: "SET_START_DATE",
  date
});

//set end date
const setEndDate = (date = undefined) => ({
  type: "SET_END_DATE",
  date
});
//Expenses Reducer

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefault = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date
      };
    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;

      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }

      if (sortBy === "amount") {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.dispatch(addExpense({ description: "rent", amount: 100 }));
store.dispatch(setTextFilter("rent"));
store.dispatch(sortByDate());
store.dispatch(setStartDate(123));
store.dispatch(setEndDate(124));

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "asdfkasdjfl",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
