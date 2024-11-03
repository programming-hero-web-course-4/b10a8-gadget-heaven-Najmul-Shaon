import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h3>Error: 404</h3>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
