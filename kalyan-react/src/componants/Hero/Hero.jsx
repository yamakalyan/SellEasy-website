const Hero = () => {
  return (
    <div>
      <div className="container px-4 py-5 my-3" id="about">
        <h2 className="pb-2 border-bottom">
          WEL COME <i className="bi bi-blockquote-right"></i>
        </h2>

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-3 my-auto">
          <div
            className="col d-flex flex-column align-items-start gap-2 "
            data-aos="fade-right"
          >
            <h2 className="fw-bold text-body-emphasis">
              Elegant Gems: Discover Timeless Glamour and Your Unique
              Adornments.
            </h2>
            <p className="text-body-secondary">
              Welcome to our jewelry haven, where elegance finds its form.
              Explore our collection of exquisite gems, each piece embodying
              timeless glamour. Discover adornments that reflect your unique
              style and aspirations, from classic to contemporary. Elevate your
              elegance with jewelry that tells your story.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg">
              Get in Touch
            </a>
          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div
                className="col d-flex flex-column gap-2"
                data-aos="fade-left"
              >
                <div>
                  <span className="h4">
                    <i className="bi bi-gem"></i>
                  </span>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Purity Guarantee
                </h4>
                <p className="text-body-secondary">
                  Highest purity, our guarantee for genuine and authentic
                  treasures
                </p>
              </div>

              <div
                className="col d-flex flex-column gap-2"
                data-aos="fade-left"
              >
                <div>
                  <span className="h4">
                    <i className="bi bi-list-stars"></i>
                  </span>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Sparkling Classics
                </h4>
                <p className="text-body-secondary">
                  Explore elegant jewelry, timeless pieces reflecting luxury and
                  your unique style.
                </p>
              </div>

              <div
                className="col d-flex flex-column gap-2"
                data-aos="fade-left"
              >
                <div>
                  <span className="h4">
                    <i className="bi bi-patch-check"></i>
                  </span>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">Trusted</h4>
                <p className="text-body-secondary">
                  Trust us for impeccable service and a commitment to your
                  satisfaction.
                </p>
              </div>

              <div
                className="col d-flex flex-column gap-2"
                data-aos="fade-left"
              >
                <div>
                  <span className="h4">
                    <i className="bi bi-gear-wide-connected"></i>
                  </span>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Qualified workers
                </h4>
                <p className="text-body-secondary">
                  Sparkling Transformations: Jewelry Repair & Restoration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
