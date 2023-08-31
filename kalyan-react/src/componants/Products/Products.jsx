import { useNavigate } from "react-router-dom";

const Products = () => {
   const img1 =
     "https://5.imimg.com/data5/EA/HD/YC/SELLER-99551446/mens-gold-neck-chain-500x500.jpg";
   const img2 =
     "https://img.etimg.com/thumb/width-1200,height-900,imgsize-68282,resizemode-75,msid-96872643/top-trending-products/lifestyle/5-best-gold-chains-for-men.jpg";

   const encodeUrl1 = btoa(img1);
  const encodeUrl2 = btoa(img2);
  
  const navigator = useNavigate()
  return (
    <div id="products">
      <div className="container">
        <div className="my-5 py-3">
          <div className="mb-5 text-center">
            <h2 className="text-dark">Latest Styles & Designs</h2>
            <hr />
            <p className="lead">
              Explore our latest styles, where timeless elegance meets
              contemporary allure. Discover adornments that
              <br /> embody modern sophistication and exquisite craftsmanship.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm img-fluid">
                <img src={img1} className="img-fluid py-2 px-2 max-width-img" />
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
                          navigator(`/view/${encodeUrl1}`);
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
              <div className="card shadow-sm img-fluid">
                <img src={img2} className="img-fluid py-2 px-2 max-width-img" />
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
                          navigator(`/view/${encodeUrl2}`);
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
              <div className="card shadow-sm img-fluid">
                <img src={img1} className="img-fluid py-2 px-2 max-width-img" />
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
                          navigator(`/view/${encodeUrl1}`);
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
              <div className="card shadow-sm img-fluid">
                <img src={img2} className="img-fluid py-2 px-2 max-width-img" />
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
                          navigator(`/view/${encodeUrl2}`);
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
  );
};

export default Products;
