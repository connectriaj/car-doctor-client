import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="py-10 px-20 shadow-xl mb-20 rounded-xl">
      <form onSubmit={handlePlaceOrder}>
        <h3 className="text-2xl text-center my-4">
          You are about to order: {title}
        </h3>
        <p className="font-semibold text-center mb-10 text-orange-700">
          Price: ${price}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            type="phone"
            placeholder="Your Phone"
            className="input input-bordered w-full"
            name="phone"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered w-full"
            name="email"
          />
        </div>
        <div className="py-10">
          <textarea
            className="textarea textarea-bordered w-full h-48"
            placeholder="Your Message"
            name="message"
          ></textarea>
        </div>
        <div className="w-full mx-auto">
          <Link to="">
            <button className="btn btn-warning text-white font-semibold w-full mb-10 capitalize">
              Order Confirm
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
