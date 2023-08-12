import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";

const HomePage = () => {
  const [age, setAge] = useState(42);
  return (
    <div className="jumbotron">
      <h1>Pluralsight Administration</h1>
      <p>
        React, Redux and React Router for ultra-responsive web apps.
        <span className="badge bg-success text-wrap">{age}</span>
      </p>

      <button
        className="btn btn-primary btn-lg"
        onClick={() => setAge(age + 1)}
      >
        increase ++
      </button>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
