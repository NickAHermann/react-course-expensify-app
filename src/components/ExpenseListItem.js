// Export a stateless functional component
// description, amount, createdAt

import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}> {description}</Link>
    </h3>
    <h5>
      {amount} - {createdAt}
    </h5>
  </div>
);

export default ExpenseListItem;
