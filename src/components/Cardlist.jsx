import React from "react";
import Moviecard from "./MovieCard";

const Cardlist = ({ movies, query }) => {
  return (
    <div className="row">
      {movies
        .filter((post) => {
          if (query === "") {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
          return false;
        })
        .map((el, index) => (
          <div className="col-sm-4" key={index}>
            <Moviecard el={el} key={index} />
          </div>
        ))}
    </div>
  );
};

export default Cardlist;
