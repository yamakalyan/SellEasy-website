import { Link } from "react-router-dom";

const Catagory = () => {
  return (
    <div>
      <div className="container">
        <div className="my-5 py-3">
          <div className="mb-4 text-center">
            <h2 className="text-secondary">View By Category</h2>
            <code className="lead">
              Browse through your favorite categories. We've got them all!
            </code>
          </div>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-3">
            <div className="col" data-aos="zoom-in">
              <Link to="/catagory/anklets">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid"
                  />
                  <div className="card-body text-center py-2">
                    <h5 className="card-text text-none">Anklets</h5>
                    <p>
                      <Link to="/catagory/anklets">Explore {" >"}</Link>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col" data-aos="zoom-in">
              <Link to="/catagory/chains">
                <div className="card shadow-sm ">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid"
                  />
                  <div className="card-body text-center py-2">
                    <h5 className="card-text">Chains</h5>
                    <p>
                      <Link to="/catagory/chains">Explore {" >"}</Link>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col" data-aos="zoom-in">
              <Link to="/catagory/bracelets">
                <div className="card shadow-sm">
                  {/* <iframe src="https://digitalindiaportal.co.in/users/pancard/Form49A.pdf" className="img-fluid"></iframe> */}

                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid"
                  />
                  <div className="card-body text-center py-2">
                    <h5 className="card-text">Bracelets</h5>
                    <p>
                      <Link to="/catagory/bracelets">Explore {" >"}</Link>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col" data-aos="zoom-in">
              <Link to="/catagory/bangles">
                <div className="card shadow-sm">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid"
                  />
                  <div className="card-body text-center py-2">
                    <h5 className="card-text">Bangles</h5>
                    <p>
                      <Link to="/catagory/bangles">Explore {" >"}</Link>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col" data-aos="zoom-in">
              <Link to="/catagory/earrings">
                <div className="card shadow-sm">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid"
                  />
                  <div className="card-body text-center py-2">
                    <h5 className="card-text">Ear Rings</h5>
                    <p>
                      <Link to="/catagory/earrings">Explore {" >"}</Link>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col" data-aos="zoom-in">
              <Link to="/catagory/mangalsutra">
                <div className="card shadow-sm">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid"
                  />
                  <div className="card-body text-center py-2">
                    <h5 className="card-text">Mangal Suthra</h5>
                    <p>
                      <Link to="/catagory/mangalsutra">Explore {" >"}</Link>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col" data-aos="zoom-in">
              <Link to="/catagory/neckwear">
                <div className="card shadow-sm">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                    className="img-fluid"
                  />
                  <div className="card-body text-center py-2">
                    <h5 className="card-text">Neck Wear</h5>
                    <p>
                      <Link to="/catagory/neckwear">Explore {" >"}</Link>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
                  className="img-fluid"
                />
                <div className="card-body text-center py-2">
                  <h5 className="card-text">Silver</h5>
                  <p>
                    <Link to="/">Explore {" >"}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
