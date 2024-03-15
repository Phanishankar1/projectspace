import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom"
function Menu()
{
    return(
     <>
     <nav className="navbar navbar-expand-lg bar fixed-top sticky-top bg-warning">
        <Link to="/"  className="navbar-brand ms-3 fs-3">
          Svaadisht
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#btn"
        >
          <i className="bx bx-menu"></i>
        </button>
        <div className="collapse navbar-collapse bgcol" id="btn">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/about"  className="nav-link mx-3 fs-5">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallary"  className="nav-link mx-3 fs-5">
                Gallary
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chefs"  className="nav-link mx-3 fs-5">
               Emp login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus"  className="nav-link mx-3 fs-5">
               Admin login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script> */}
     </>
    )
}
export default Menu;