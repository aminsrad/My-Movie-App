import React from "react";

const Card = ({ pets }) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSqBxhZ7_-vJ7-611CrRPwevycxdQ-ONuCRlnympvCUF18qzy-BFa6D7QOR8LqX3SXKi9VcwcyAUuLZxg0"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{pets.name}</h5>
              <p className="card-text"></p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary"></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
