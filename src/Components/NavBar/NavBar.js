import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            React Forms
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Login
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Login1</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login2">Login2</Link> </li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login3">Login3</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login4">Login4</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login5">Login5</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login6">Login6</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login7">Login7</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login8">Login8</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login9">Login9</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login10">Login10</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login11">Login11</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login12">Login12</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login13">Login13</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login14">Login14</Link></li>
                  {/* <hr className="dropdown-divider" /> */}
                  {/* <li><Link className="dropdown-item" to="/login15">Login15</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/login16">Login16</Link></li> */}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Registration
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/register1">Refister1</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register2">Register2</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register3">Register3</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register4">Register4</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register5">Register5</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register6">Register6</Link></li>
                  {/* <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register7">Register7</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register8">Register8</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register9">Register9</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register10">Register10</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register11">Register11</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register12">Register12</Link></li>
                  <hr className="dropdown-divider" />
                  <li><Link className="dropdown-item" to="/register13">Register13</Link></li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
