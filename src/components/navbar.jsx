import { NavLink } from "react-router-dom";
import { productsContext } from "./context/product-context";
import { useContext } from "react";
function  Navbar () {
  const productContext = useContext(productsContext);

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 sticky-top ">
          <NavLink className="navbar-brand mx-3" to={"/home"}>
            online-shopping
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link active" to={"/home"}>
                Home <span className="sr-only">(current)</span>
              </NavLink>
              <NavLink className="nav-item nav-link" to={"/products"}>
                products
              </NavLink>
              <NavLink className="nav-item nav-link" to={"/about"}>
                about
              </NavLink>
              <NavLink className="nav-item nav-link" to={"/contact"}>
                contact
              </NavLink>
            </div>
          </div>
          <div className="buttons mx-3">
            <NavLink to={"/login"} className="btn btn-dark mx-2 ">
              Login
              <i className="fa fa-sign-in px-1" aria-hidden="true"></i>
            </NavLink>
            <NavLink to={"/register"} className="btn btn-dark mx-2">
              Register
              <i className="fa fa-registered px-1" aria-hidden="true"></i>
            </NavLink>
            <NavLink to={"/cart"} className="btn btn-dark mx-2">
              Cart
              <h6 className="d-inline mb-0 px-1 text-primary">
                {productContext.cartCount.length === 0 ? (
                  <i
                    className="fa fa-shopping-basket px-1"
                    aria-hidden="true"></i>
                ) : (
                  productContext.cartCount.length
                )}
              </h6>
              {/* <i className="fa fa-shopping-basket px-1" aria-hidden="true"></i> */}
            </NavLink>
          </div>
        </nav>
      </>
    );
}

export default  Navbar ;