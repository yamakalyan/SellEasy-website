import { Link } from "react-router-dom";

const Catagory = () => {
  return (
    <div>
      <div className="container">
        <div className="my-5 py-3">
          <div className="mb-5 text-center">
            <h2 className="text-dark">View By Category</h2>
            <hr />
            <code className="lead">
              Browse through your favorite categories. We've got them all!
            </code>
          </div>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-3">
            <div className="col" data-aos="zoom-in">
              <Link to="/catagory/anklets">
                <div className="card shadow-sm ">
                  <img
                    src="https://rukminim2.flixcart.com/image/850/1000/l4iscy80/anklet/q/c/k/na-na-diamond-anklet-silver-gjh-original-imagfecuvmwk7p3u.jpeg?q=20"
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
                    src="https://5.imimg.com/data5/SELLER/Default/2021/5/VP/AG/KJ/130019253/gents-chain.jpg"
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
                    src="https://5.imimg.com/data5/LU/UL/DJ/SELLER-84633020/gents-bracelet.jpg"
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
                    src="https://www.rnarayanjewellers.com/cdn/shop/products/Aasma-22kt-Gold-Traditional-Bangles-1_1024x1024.jpg?v=1661098338"
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
                    src="https://cdn1.jewelxy.com/live/img/business_product/pMY9sEZYkC_20211225135731.jpg"
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
                    src="https://images.meesho.com/images/products/239569251/n2ffl_512.webp"
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
                    src="https://m.media-amazon.com/images/I/71Z2-z7KHlL.jpg"
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
                  src="https://m.media-amazon.com/images/I/51fJm2bFjvL._AC_UY1100_.jpg"
                  className="img-fluid"
                />
                <div className="card-body text-center py-2">
                  <h5 className="card-text">Finger rings</h5>
                  <p>
                    <Link to="/">Explore {" >"}</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <img
                  src="https://m.media-amazon.com/images/I/71HwCNQqwkL._AC_UY1100_.jpg"
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
