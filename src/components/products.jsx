import Product from "./product";
import { productsContext } from "./context/product-context";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Products () {
    const productContext = useContext(productsContext);
    console.log(productContext);
    
   
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-3">
              <h3>Latest products</h3>
            </div>
          </div>
          <div className="row">
            {productContext.products.map(p => {
              return (
                <div key={p.id} className="col-3 text-center card">
                  <div className="card-body">
                    <h4 className="display-7" style={{ height: 70 }}>
                      {p.category}
                    </h4>
                    <Link to={`/product/${p.id}`}>
                      <img
                        className="max-width:100%"
                        src={p.image}
                        style={{ maxHeight: 170 }}
                        alt="product-image"
                      />
                    </Link>

                    <h5 className="p-1">{p.price} $</h5>
                    <div className="d-flex justify-content-center">
                      <Link
                        to={"/products"}
                        onClick={productContext.addToCart}
                        className="btn btn-primary mx-2">
                        add to cart
                      </Link>
                      <Link to={"/cart"} className="btn btn-primary">
                        go to cart
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