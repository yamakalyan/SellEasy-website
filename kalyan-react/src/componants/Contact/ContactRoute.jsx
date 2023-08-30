import React from 'react'

const ContactRoute = () => {
  return (
    <div>
      <div className="container py-5">
        <h2 className="text-secondary text-center display-5">
          Reach Out to Us
        </h2>
        <hr />
        <div className="row py-5" id="contact">
          <div className="col-md col-lg" data-aos="zoom-out">
            <div
              className="text-center"
              style={{ display: "grid", placeItems: "center" }}
            >
              <p className="lead mt-0">
                {/* reach to us if you have any queries. */}
              </p>
            </div>
            <form>
              <div className="input-group mb-3">
                <span class="input-group-text">Enter Name</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full name"
                />
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">Enter Mobile</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Mobile"
                />
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">Enter Email</span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="input-group mb-3">
                {/* <span class="input-group-text" >@</span> */}
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Explain how can we help you "
                />
              </div>
              <div className="text-center mb-3 d-grid ">
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactRoute
