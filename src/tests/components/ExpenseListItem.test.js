import React from "react";

import moment from "moment";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";

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

test("should render an instance of ExpenseListItem", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
