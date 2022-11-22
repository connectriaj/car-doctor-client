import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
      <figure>
        <img src={img} alt="service img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="flex justify-between items-center">
          <div className="font-semibold text-xl text-orange-600">
            Price: ${price}
          </div>

          <Link to={`/checkout/${_id}`}>
            <FaArrowRight className="text-orange-600"></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
