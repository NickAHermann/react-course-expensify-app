import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    Error 404 not found
    <Link to="/">Go back</Link>
  </div>
);

export default NotFoundPage;
