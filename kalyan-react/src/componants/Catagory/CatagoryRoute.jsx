import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CatagoryRoute = () => {
  const [imgUrl, setImageUrl] = useState("");
  const params = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    switch (params.name) {
      case "anklets":
        setImageUrl(
          "https://rukminim2.flixcart.com/image/850/1000/l4iscy80/anklet/q/c/k/na-na-diamond-anklet-silver-gjh-original-imagfecuvmwk7p3u.jpeg?q=20"
        );
        break;
      case "chains":
        setImageUrl(
          "https://5.imimg.com/data5/SELLER/Default/2021/5/VP/AG/KJ/130019253/gents-chain.jpg"
        );
        break;
      case "bracelets":
        setImageUrl(
          "https://5.imimg.com/data5/LU/UL/DJ/SELLER-84633020/gents-bracelet.jpg"
        );
        break;
      case "bangles":
        setImageUrl(
          "https://www.rnarayanjewellers.com/cdn/shop/products/Aasma-22kt-Gold-Traditional-Bangles-1_1024x1024.jpg?v=1661098338"
        );
        break;
      case "earrings":
        setImageUrl(
          "https://cdn1.jewelxy.com/live/img/business_product/pMY9sEZYkC_20211225135731.jpg"
        );
        break;
      case "mangalsutras":
        setImageUrl(
          "https://images.meesho.com/images/products/239569251/n2ffl_512.webp"
        );
        break;
      case "neckwear":
        setImageUrl("https://m.media-amazon.com/images/I/71Z2-z7KHlL.jpg");
        break;
      case "rings":
        setImageUrl(
          "https://m.media-amazon.com/images/I/51fJm2bFjvL._AC_UY1100_.jpg"
        );
        break;

      default:
        setImageUrl(
          "https://as1.ftcdn.net/v2/jpg/05/64/11/42/1000_F_564114238_mcU43Fplgq3J1wpxYUCvDIew9JxUbJrB.jpg"
        );
        break;
    }
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
                  <img src={imgUrl} className="img-fluid py-2 px-2" />
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
