import React from "react";

const Book = () => {
  return (
    <div>
      <div className="container py-4">
        <div className="row">
          <div className="" data-aos="zoom-in">
            <h1 className=" text-dark">Enter your details</h1>
            {/* <code className="lead">so we can contact to you easily</code> */}
            <hr />
          </div>
          <div className="col-md col-lg" data-aos="fade-right">
            <img src="/Poetry-bro.svg" className="img-fluid" />
          </div>
          <div className="col-md col-lg" data-aos="fade-left">
            <form>
              <div class="mb-3">
                <label class="form-label">Name *</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter name"
                />
                {/* <div class="form-text">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
              <div class="mb-3">
                <label class="form-label">Mobile *</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter mobile number"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email (optional)"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Desired amount</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter desired amount"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Write if you have any message</label>
                <textarea
                  rows="3"
                  type="password"
                  class="form-control"
                  placeholder="Enter your message (optional)"
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
