import React from "react";
import Moviecard from "./MovieCard";

const Cardlist = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((el, index) => (
        <div className="col-sm-4" key={index}>
          <Moviecard el={el} key={index} />
        </div>
      ))}
    </div>
  );
};

export default Cardlist;
