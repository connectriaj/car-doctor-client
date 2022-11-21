import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
      const password = form.password.value;
      
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero w-full py-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-4/5" src={img} alt="login" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  p-16">
          <h1 className="text-5xl font-bold text-center">Sign Up</h1>

          <Form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              {/* <label className="label">
                <Link
                  to=""
                  className="label-text-alt link link-hover text-error"
                >
                  Forgot password?
                </Link>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-warning"
                type="submit"
                value="Sign Up"
              />
            </div>
          </Form>
          <p className="text-center">
            Already have an account?
            <Link className="text-orange-600 font-semibold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
