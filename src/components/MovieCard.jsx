import React from "react";

const Moviecard = ({ el }) => {
  return (
    <div style={{ width: "18rem" }}>
      <div className="card h-100">
        <img src={el.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">Title: {el.title}</h2>
          <p className="card-text">Category: {el.category}</p>
          <p className="card-text">Language: {el.language}</p>
          <p className="card-text">Year: {el.year}</p>
          <p className="card-text">Status: {el.status}</p>
          <p className="card-text"></p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">Rate: {el.rate}</small>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
