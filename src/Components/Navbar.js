import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
         

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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
            <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active text-white "
                  aria-current="page"
                >
                  <button className="btn btn-danger">Take Quiz</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/createQuestion"
                  className="nav-link active text-white "
                  aria-current="page"
                >
                  <button className="btn btn-warning">Create Quiz</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="editQuestion"
                  className="nav-link active text-white "
                  aria-current="page"
                >
                  <button className="btn btn-light">Edit Quiz</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;