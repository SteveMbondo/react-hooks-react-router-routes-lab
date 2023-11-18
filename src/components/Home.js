import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/directors">Directors</Link>
        </li>
        <li>
          <Link to="/actors">Actors</Link>
        </li>
      </ul>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
