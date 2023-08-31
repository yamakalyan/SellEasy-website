import React from "react";
import { Link, useParams } from "react-router-dom";

const Login = () => {
  const params = useParams();

  return (
    <div
      className=""
      style={{ height: "100vh", display: "grid", placeItems: "center" }}
    >
      <div className="container ">
        <div className="row ">
          <div className="col-lg-4 col-md mx-auto">
            <form>
              <h1 className="h3 mb-3 fw-normal text-center">
                Please sign in <code>.{params.name}</code>
              </h1>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="my-3">
                Did you{" "}
                <Link to={`/forgotpassword/${params.name}`}>
                  forgot password ?
                </Link>
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
