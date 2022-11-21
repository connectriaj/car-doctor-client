import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image}  className="w-full rounded-xl" alt="img" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>

      <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24 top-2/4">
        <p className="text-white text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>

      <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24 top-3/4">
        <button className="btn btn-warning text-white font-semibold mr-5">
          Discover More
        </button>
        <button className="btn btn-outline btn-warning text-white font-semibold">
          Latest Project
        </button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5 btn-error">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle btn-error">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;