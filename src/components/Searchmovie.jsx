import React from "react";

const Searchmovie = ({ setQuery }) => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">MOVIES APP PLATFORME</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              // aria-label="Search"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Searchmovie;
