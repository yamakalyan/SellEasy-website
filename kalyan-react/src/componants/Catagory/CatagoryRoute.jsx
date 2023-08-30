import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CatagoryRoute = () => {
  const params = useParams();
  const navigator = useNavigate()

  useEffect(() => {
    console.log("Route now" + params.name);
  }, [params]);
  return (
    <div>
      <div>
        <div className="container">
          <div className="my-5 py-3">
            <div className="mb-3 text-center">
              <h2 className="text-secondary  text-uppercase">
                Explore our <span className="text-primary"> {params.name}</span>{" "}
                Designs
              </h2>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam labore veritatis natus, odio animi rem provident
                possimus cupiditate vitae, enim suscipit. Cum nihil similique
                minima doloremque atque unde iste totam.
              </p>
            </div>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3">
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid py-2 px-2"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="my-auto">Product name</p>
                      </div>
                      <div className="btn-group">
                         <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                          navigator("/view/123");
                        }}
                      >
                        View
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagoryRoute;
