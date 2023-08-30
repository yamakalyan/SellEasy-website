export default function Contact() {
  return (
    <div>
      <div>
        <div className="container">
          <h2 className="text-secondary text-center display-5">Reach Out to Us</h2>
          <hr/>
          <div className="row py-5" id="contact">

            <div className="col-md-5 col-lg-5 my-auto">
              <div>
                <h3>Open timings: </h3>
                <p> 10:00 am - 8:00 pm</p>
              </div>
              <div>
                <h3>Regd. office : </h3>
                <p> Hyderabad-500072</p>
              </div>
              <div>
                <h3>Mobile number : </h3>
                <p>+91 9550049382</p>
              </div>
              <div>
                <h3>Email : </h3>
                <p>yamakalyan6@gmail.com</p>
              </div>
            </div>
            <div className="col-md col-lg">
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
    </div>
  );
}
