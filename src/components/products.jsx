import Product from "./product";
import { productsContext } from "./context/product-context";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Products () {
    const productContext = useContext(productsContext);
    console.log(productContext);

    const filterProducts = (cat)=>{
     const filteredProduct = productContext.products.filter( p =>p.category === cat);
     productContext.setFilter (filteredProduct);
  
    }
    
   
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-3">
              <h3>Latest products</h3>
            </div>
            <div className="col-12 d-flex flex-row justify-content-center align-items-center my-4 ">
              <Link to={"/products"}
                onClick={() => {
                  productContext.setFilter(productContext.products);
                }}
                className="btn btn-outline-dark fw-bold mx-2">
                All
              </Link>
              <Link to={"/products/men"}
                onClick={() => {
                  filterProducts("men's clothing");
                }}
                className="btn btn-outline-dark fw-bold mx-2">
                Men
              </Link>
              
              <Link to={"/products/wemon"}
                onClick={() => {
                  filterProducts("women's clothing");
                }}
                className="btn btn-outline-dark fw-bold mx-2">
                Wemon
              </Link>
              <Link to={"/products/jewlery"}
                onClick={() => {
                  filterProducts("jewelery");
                }}
                className="btn btn-outline-dark fw-bold mx-2">
                Jewlery
              </Link>
              <Link to={"/products/electronic"}
                onClick={() => {
                  filterProducts("electronics");
                }}
                className="btn btn-outline-dark fw-bold mx-2">
                Electronic
              </Link>
            </div>
          </div>
          <div className="row">
            {productContext.filtered.map((p) => {
              return (
                <div key={p.id} className="col-lg-3 col-md-6  text-center card">
                  <div className="card-body">
                    <h4 className="display-7" style={{ height: 70 }}>
                      {p.category}
                    </h4>
                    <div style={{ Height: 100 }}>
                      <Link to={`/product/${p.id}`}>
                        <img
                          src={p.image}
                          style={{ maxHeight: 170, maxWidth: 250 }}
                          alt="product-image"
                        />
                      </Link>
                    </div>

                    <h5 className="p-1">{p.price} $</h5>
                    <div className="d-flex justify-content-center">
                      <Link
                        to={"/products"}
                        onClick={() => {
                          productContext.addToCart(p);
                        }}
                        className="btn btn-primary mx-2">
                        add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}

export default Products ;