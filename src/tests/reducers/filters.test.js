import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "#@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should setup sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should setup sortBy to date", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("should setup set text filter", () => {
  const text = "hello";
  const state = filtersReducer(undefined, { type: "SET_FILTER", text });
  expect(state.text).toBe("hello");
});

test("should set startDate filter", () => {
  const startDate = moment(0);
  const action = {
    type: "SET_START_DATE",
    date: startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(0));
});

test("should set endDate filter", () => {
  const endDate = moment(0);
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    date: endDate
  });
  expect(state.endDate).toEqual(moment(0));
});
