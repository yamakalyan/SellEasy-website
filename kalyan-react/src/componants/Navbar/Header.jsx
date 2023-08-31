import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky-top bg-dark" id="navbar">
      <div className="container py-2">
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
          {/* <nav className="navbar navbar-expand-lg " data-bs-theme="dark"> */}
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Golden Jewellers
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-5">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Whats'new
                  </NavLink>
                </li>
                <li className="nav-item"></li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Catagory
                  </a>
                  <ul className="dropdown-menu px-3">
                    <li>
                      <NavLink className="nav-link" to="/catagory/anklets">
                        Anklets
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/catagory/bangles">
                        Bangles
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/catagory/bracelets">
                        Bracelets
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/catagory/earrings">
                        Ear rings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/catagory/rings">
                        Finger rings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/catagory/chains">
                        Chains
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/catagory/mangalsutras">
                        Mangal sutras
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/catagory/neckwears">
                        Neck wears
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
