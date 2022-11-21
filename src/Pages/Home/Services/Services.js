import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <p className="text-xl font-semibold text-orange-700">Service</p>
        <h2 className="text-5xl font-semibold my-5">Our Service Area</h2>
        <p className="pb-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="flex justify-center items-center my-12">
        <button className="btn btn-outline btn-error capitalize px-10 font-bold">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
