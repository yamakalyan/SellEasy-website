import Banner1 from "../Banners/Banner1";
import { Link, useParams } from "react-router-dom";

const View = () => {
  const params = useParams();

  const decodeUrl = atob(params.id);

  return (
    <div>
      <div className="container py-5 ">
        <div className="row">
          <div className="col-md col-lg" data-aos="zoom-in">
            <div>
              <img src={decodeUrl} className="img-fluid" />
            </div>
          </div>
          <div className="col-md col-l my-3" data-aos="fade-left">
            <div>
              <div>
                <p>#123456</p>
                <h1>Product name here</h1>
                <hr />
              </div>
              <div>
                <p>Textured Bangle crafted in 22 Karat Yellow Gold</p>
              </div>
              <div className="mb-3">
                <h3>
                  Price : <span>9999/-</span>
                </h3>
              </div>
              <div>
                <p>Price Inclusive of all taxes. See full Price Breakup</p>
              </div>
              <div className="input-group row mb-3">
                <div className="col-md col-lg mb-3">
                  <label className="form-label">
                    Size *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Size"
                    defaultValue="20 mm"
                  />
                </div>
                <div className="col-md col-lg mb-3">
                  <label className="form-label">
                    Grams *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Grams"
                    defaultValue="11.999"
                  />
                </div>
                <div className="col-md col-lg mb-3">
                  <label className="form-label">
                    Qty *
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Quantity"
                    defaultValue="1"
                  />
                </div>
              </div>
              {/* <br /> */}
              <div className="mb-3">
                <h6 className="mb-3">Gold Purity: 22 Karat</h6>
                <p>
                  <i className="bi bi-gem"></i> Purity Guaranteed.
                </p>
                <p>
                  {" "}
                  <i className="bi bi-stars"></i> High Quality.
                </p>
                <p>
                  {" "}
                  <i className="bi bi-award"></i> Certified Product.
                </p>
              </div>
              <div className="mb-3">
                <div className=" gap-2">
                  <Link
                    to="/book/123"
                    className="btn btn-outline-primary w-100"
                  >
                    Book Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner1 />
    </div>
  );
};

export default View;
